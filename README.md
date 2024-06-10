# React-HitMan

![Logo](https://github.com/Shikhar2525/HitMan/blob/main/logo-no-background.png?raw=true)

# About

This custom React package offers a powerful and easy-to-use custom hook for handling API requests within your React applications. Whether you need to fetch data from an API or post data to it, this package streamlines the process and enhances the efficiency of your code.

# Why HitMan ?

This npm package simplifies API calls in React using custom hooks. Here's why it's great:

- **Simplicity**: Unlike larger frameworks such as RTK, this package is designed to be lightweight and easy to understand. You don't need to learn complex abstractions or deal with unnecessary overhead.

- **Ease of Use**: The custom hooks provided by this package abstract away common API call patterns, making it quick and straightforward to integrate API functionality into your React components.

- **Flexibility**: While it's simple to use out of the box, this package also offers customization options for those who need more control over their API calls. You can easily adapt it to suit your specific project requirements.

- **Performance**: By keeping things lean and focused, this package ensures efficient API interactions without unnecessary bloat or overhead, resulting in better performance for your React applications.

If you're looking for a hassle-free way to handle API calls in React without the complexity of larger frameworks, give this package a try!

# Features

It Simplifies the process of fetching data from APIs by providing a customizable hook. You can easily configure headers, query parameters, and other options.

- **Post Data**: Includes a post request function within the hook, allowing you to send data to APIs effortlessly. Handle responses and errors seamlessly in your components.

- **Async/Await Support**: Leverages modern JavaScript features like async/await, making asynchronous API calls clean and readable.

- **Error Handling**: Built-in error handling ensures that your application gracefully manages API errors, providing a smooth user experience.

- **Customizable Options**: Configure the API endpoint, request method, headers, and more based on your specific requirements.

## Installation

Install api-hitman with npm

```bash
  npm install api-hitman

```

## Props Description

#### useFetch , useMutation

| Props       | Type                                  | Description                                                                   |
| :---------- | :------------------------------------ | :---------------------------------------------------------------------------- |
| `baseUrl`   | `string`                              | **Required**. Your base url eg. **localhost:8000**                            |
| `path`      | `string`                              | **Required**. API Path to hit eg. **/products**                               |
| `params`    | `{ [key: string]: string or number }` | **Optional**. URL params eg. **{ id:123 , isNew:true }**                      |
| `postData ` | `object`                              | **Required in useMutation only**. Data need to be passed **{ name: 'John' }** |

#### Utils Props

| Props   | Type      | Description                                           |
| :------ | :-------- | :---------------------------------------------------- |
| `skip ` | `boolean` | **Optional (defualt:false)**. Skip API call to happen |

#### Returned Variables

| Props        | Type       | Description                                          |
| :----------- | :--------- | :--------------------------------------------------- |
| `data `      | `object`   | Returned data after successful API call              |
| `isLoading ` | `boolean`  | Current state of API loading                         |
| `refetch `   | `Callback` | **Only for useFetch.** Called to refetch current API |
| `error `     | `Error`    | Returned error object when API call fails            |
| `isError `   | `boolean`  | Current state of Error                               |

## Usage/Examples

```javascript
import { useFetch } from "react-hitman-api";

export default function App() {
  const { data } = useFetch(
    {
      baseUrl: "https://jsonplaceholder.typicode.com",
      path: "/comments",
      params: { postId: 1 },
    },
    {
      skip: false,
    }
  );

  return (
    <main>
      {data?.map((item: any) => {
        return <h6>{JSON.stringify(item)}</h6>;
      })}
    </main>
  );
}
```

- Try it now: [@replit](https://replit.com/@ShikharMandloi/HitMan-Usage-Example#src/App.tsx)

## FAQ

#### Can it be used with any other JS frameworks

No

#### Can we contriubte to this package

Yes , please visit below given links to find github repository to raise a bug or contribute

## Authors

- [@shikhar2525](https://www.github.com/shikhar2525)

## Raise a (Bug / Feature Request)

For support, email shikhar.mandloi@gmail.com or raise Raise Bug / Feature Request at https://github.com/Shikhar2525/HitMan/issues

## 🔗 Links

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/shikhar-mandloi-8657b6182/)

## Badges

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
