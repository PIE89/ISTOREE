import { createContext, useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { MainPage } from "./Pages/MainPage";
import { fetchCategories, fetchFilterValues, fetchProducts } from "./api";
import { ProductsPage } from "./Pages/ProductsPage";
import { OrderPage } from "./Pages/OrderPage";
import { SuccessPage } from "./Pages/SuccessPage";

export const AppContext = createContext(null);

export const App = () => {
  const [products, setProducts] = useState(null);
  const [categories, setCategories] = useState(null);
  const [filterValues, setFilterValues] = useState(null);
  const [filter, setFilter] = useState({
    category: null,
    price: {
      min: null,
      max: null,
    },
    memory: [], // ['512 Gb', '2 Tb', '1 Tb']
    colors: [],
    sort: "",
  });
  const [pageLoading, setPageLoading] = useState(false);
  const [pageError, setPageError] = useState(false);

  useEffect(() => {
    setPageLoading(true);
    setTimeout(() => {
      Promise.all([fetchProducts(), fetchCategories(), fetchFilterValues()])
        .then((values) => {
          const [productsData, categoriesData, filterData] = values;
          !productsData.error && setProducts(productsData);
          !categoriesData.error && setCategories(categoriesData);
          !filterData.error && setFilterValues(filterData);
        })
        .catch((error) => {
          console.log("Ошибка при получении данных", error);
          setPageError(true);
        })
        .finally(() => {
          setPageLoading(false);
        });
    }, 500);
  }, []);

  useEffect(() => {
    let params = "?";

    // проверка на категорию
    if (filter.category && filter.category.slug !== "all") {
      params += "cat=" + filter.category.slug;
    }

    // проверка на цену
    if (filter.price.min) {
      params += "&price_gte=" + filter.price.min;
    }

    if (filter.price.max) {
      params += "&price_lte=" + filter.price.max;
    }

    // проверка на объем памяти
    if (filter.memory.length) {
      for (let memory of filter.memory) {
        params += "&memory=" + memory;
      }
    }

    // проверка по цвету
    if (filter.colors.length) {
      for (let color of filter.colors) {
        params += "&color=" + color;
      }
    }

    // проверка на сортировку
    if (filter.sort === "priceAsc" || filter.sort === "priceDesc") {
      let sortDirection = filter.sort === "priceAsc" ? "asc" : "desc";
      params += "&_sort=price&_order=" + sortDirection;
    }

    fetchProducts(params).then((productsData) => {
      if (Array.isArray(productsData)) {
        setProducts(productsData);
      }
    });
  }, [filter]);

  useEffect(() => {
    categories &&
      setFilter((prev) => {
        return {
          ...prev,
          category: categories[0],
        };
      });
  }, [categories]);

  useEffect(() => {
    filterValues &&
      setFilter((prev) => {
        return {
          ...prev,
          price: {
            min: filterValues.price.min,
            max: filterValues.price.max,
          },
        };
      });
  }, [filterValues]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout pageError={pageError} pageLoading={pageLoading} />,
      children: [
        {
          path: "/",
          element: <MainPage />,
        },
        {
          path: "/product/:productId",
          element: <ProductsPage />,
        },
        {
          path: "/order",
          element: <OrderPage />,
        },
        {
          path: "/orderSuccess",
          element: <SuccessPage />,
        },
      ],
    },
  ]);

  return (
    <AppContext.Provider
      value={{
        products,
        categories,
        filterValues,
        setFilterValues,
        filter,
        setFilter,
      }}
    >
      <RouterProvider router={router} />
    </AppContext.Provider>
  );
};
