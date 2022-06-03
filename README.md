<p align="center">
  <img width="60" height="60" src="https://user-images.githubusercontent.com/60134943/170816508-59760aa9-6f71-4226-b48e-dc7be99773e3.png">
  
  <h1 align='center'>gjchoo.com built with next.js & typescript</h1>
</p>

 <p align='center'>A full working and open source portfolio built with Next.js & typescript, hosted in Digital Ocean</p>

![portfolio screenshot](https://user-images.githubusercontent.com/60134943/170852920-a929bef7-e278-4099-b347-f97a2acd5bb1.png)

<p align='left'>
  Here is a fully working source code of my personal portfolio using nextjs & typescript. If you would like to use the code base for your own personal porfolio or experiment with it, please remember to fork it! I will be progressively adding new features into the code base, so if you want to follow it remember to star it!
</p>


### TL;DR
Yes, you can fork this repo. But remember to give credit or reference back to gjchoo.com! Thank you!


## 🛠  Installation & Set Up
Next.js is a React framework that provides a lot of basic tools to build a responsive and high performance react app. The framework comes with its own routing, rendering and most important of all it has a good developer experience. I personally used Next.js for most of my projects and very naturally it is my first choice when comes to developing a portfolio. Learn more about [Next.js](https://nextjs.org/learn/foundations/about-nextjs/what-is-nextjs). This setup presume you have your node.js installed.

1) git clone the repo
```
git clone repo
```

2) Install dependencies

```
yarn install
```

3) Run development mode
```
yarn dev
```

## 🚀 Ready For Production
To generate production ready build, you can build first then serve the production site.

1) Generate production build
```
yarn build
```

2) Preview the production build
```
yarn start
```

## 📖 Storybook Development
Storybook is a open source tool for building UI components and pags. It helps developers to visualise the different components and its own documentation. I predominantely used the atomic design to create the components, the order of components start from 

<img width="1234" alt="Screenshot 2022-06-03 at 10 26 27 PM" src="https://user-images.githubusercontent.com/60134943/171873995-acd02f7f-6753-424b-b27a-5151ece09561.png">

```
atom > molecule > compound > page
```

To start the local storybook mode
```
yarn storybook
```

## 💽 Unit Tests
For unit tests, I am using jest with react testing library. RTL is one the best tools in the market for testing react components, I enjoyed working with it and will continue to use it as my primary tool for unit testing. Learn more about [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

To run all tests
```
yarn test 
```

To view code coverage
```
yarn coverage
```

## 📁 Folder Structure
The framework of the next.js provided a lot of basic functionalities, therefore the app foldering is kept simple. The app contains only a few main folders which are outlined in the above section. 

```
——————— root
  ｜——— .storybook // storybook config files
  ｜——— components // random small components 
  ｜——— pages      // main pages of the app
  ｜——— stories    // main bulk of the atomic, molecules & compounds components
  ｜——— styles     // styling scss
  ｜——— types      // basic typescript
  ｜——- utils.     // all of the constant files
   ....
```


