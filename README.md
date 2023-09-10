# data-fetching-swr

In the context of React and API calls, "SWR" stands for ***"Stale-While-Revalidate,"*** which is a data-fetching strategy or pattern commonly used in web development. SWR is not a built-in feature of React itself but is often used in conjunction with React libraries like SWR (a popular library) or custom implementations.

**Here's a breakdown of what SWR means and how it works:**

```**Stale**```: When data is fetched using SWR, it can initially return stale (cached) data if available. Stale data is data that may not be the most up-to-date but is readily available from a previous request. This ensures that your application can display some data immediately while fetching fresh data in the background.

```**While**```: While displaying the stale data, SWR initiates a background data revalidation or refresh process. It will send a new request to the API to get the latest data.

```**Revalidate**```: Once the new data is fetched, SWR replaces the stale data with the updated data, ensuring that the UI is always up-to-date. If the new data is the same as the old data (indicating no changes), it doesn't trigger a re-render of your components, minimizing unnecessary re-renders.

SWR is particularly useful in scenarios where you want to provide a fast and responsive user experience by showing cached data while simultaneously fetching the latest data in the background. It helps avoid blocking the UI while waiting for fresh data from the API.

To use SWR in a React application, you typically import and use the SWR library (or a similar library like React Query). These libraries provide hooks that you can use in your components to manage data fetching and caching, making it easier to implement the SWR pattern in your application.

## About 📱

This project was created with base on this **[video](https://www.youtube.com/live/uNFB9EbQz90?si=qv38Cy4s5tRHmae3)** from **[Rocketseat](https://www.rocketseat.com.br/?utm_source=google&utm_medium=cpc&utm_campaign=lead&utm_term=perpetuo&utm_content=institucional-lead-home-texto-lead-brandkws-none-none-institucional-none-none-br-google&utm_term=rocketseat&utm_campaign=PROGRAMAS-ALL-BRANDKWS-SEM&utm_source=adwords&utm_medium=ppc&hsa_acc=8545075154&hsa_cam=16048648686&hsa_grp=135825188594&hsa_ad=579096962131&hsa_src=g&hsa_tgt=kwd-679159515078&hsa_kw=rocketseat&hsa_mt=b&hsa_net=adwords&hsa_ver=3&gclid=Cj0KCQjw0vWnBhC6ARIsAJpJM6dFbLhnGiMlP6YKwcLbrxe1RwILA69zHTaIfJc53z5L4KACFHC59hsaAuGrEALw_wcB)** for studies purposes. 

- See about ```swr``` **[here](https://swr.vercel.app/pt-BR)** too.
