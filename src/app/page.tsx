import Footer from "@/components/footer/footer";
import PharmaStoreHeader from "@/components/header/header";
import BestSeller from "@/components/sections/bestsellers/bestSeller";
import Blog from "@/components/sections/blog/blog";
import Categories from "@/components/sections/catagories/catagories";
import FeaturedProducts from "@/components/sections/featuredProduct/featuredProducts";
import Hero from "@/components/sections/hero/hero";
import MainCategories from "@/components/subcategories/subcategories";
import React from "react";

const page = () => {
  return (
    <>
      <PharmaStoreHeader />
      <Hero />
      <Categories />
      <MainCategories />
      <FeaturedProducts />
      <BestSeller />
      <Blog />
      <Footer />
    </>
  );
};

export default page;
