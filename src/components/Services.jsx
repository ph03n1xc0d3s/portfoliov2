import React from "react";
import '../assets/css/services.css'
import Card from "./Card";

const Services = () => {
    const cardContent = [
        {
            'serviceIcon' : 'https://cdn.shopify.com/s/files/1/0573/6395/5770/files/shopify.png?v=1737232415',
            'serviceName' : 'Shopify Development',
            'serviceDescription' : 'Empowering Your Online Store with Expert Shopify Solutions'
        },
        {
          'serviceIcon': 'https://cdn.shopify.com/s/files/1/0573/6395/5770/files/wordpress.png?v=1737235518',
          'serviceName' : 'Wordpress Development',
          'serviceDescription' : 'Building Dynamic Websites with Expert WordPress Development'
        },
        {
          'serviceIcon' : 'https://cdn.shopify.com/s/files/1/0573/6395/5770/files/web.png?v=1737235467',
          'serviceName' : 'Shopify Custom Apps',
          'serviceDescription' : 'Tailored Shopify Apps to Elevate Your E-Commerce Game.',
        },
        {
          'serviceIcon' : 'https://cdn.shopify.com/s/files/1/0573/6395/5770/files/atom.png?v=1737235468',
          'serviceName' : 'MERN Stack Development',
          'serviceDescription' : 'Full-Stack Excellence with Scalable MERN Solutions',
        },
        {
          'serviceIcon' : 'https://cdn.shopify.com/s/files/1/0573/6395/5770/files/php.png?v=1737235467',
          'serviceName' : 'PHP Applications',
          'serviceDescription' : 'Robust PHP Solutions Powered by Laravel & CodeIgniter Expertise',
        },
        {
          'serviceIcon' : 'https://cdn.shopify.com/s/files/1/0573/6395/5770/files/graphic-designer.png?v=1737235467',
          'serviceName' : 'Graphic Designing',
          'serviceDescription' : 'Transforming Ideas into Stunning Visuals.',
        },
        {
          'serviceIcon' : 'https://cdn.shopify.com/s/files/1/0573/6395/5770/files/api.png?v=1737235467',
          'serviceName' : 'API Development',
          'serviceDescription' : 'Seamless Connectivity with Scalable API Solutions',
        },
        {
          'serviceIcon' : 'https://cdn.shopify.com/s/files/1/0573/6395/5770/files/ce61658e8ea4d9dba40c389f723f1668.png?v=1737235467',
          'serviceName' : 'Apache',
          'serviceDescription' : 'Powering Web Servers with Reliable Apache Solutions',
          'customWidth' : '110',
        },
        {
          'serviceIcon' : 'https://cdn.shopify.com/s/files/1/0573/6395/5770/files/nginx.png?v=1737235803',
          'serviceName' : 'Nginx',
          'serviceDescription' : 'Optimized Web Performance with NGINX',
          'customWidth' : '200',
        },
    ]
  return (
    <div className="services-container" id="services">
      <div className="container-heading">
        <h3 className="heading">Our Services</h3>
        <p>Where Creativity Meets Functionality</p>
      </div>
      <Card services={cardContent}/>
    </div>
  );
};

export default Services;
