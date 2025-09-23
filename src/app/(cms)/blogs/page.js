"use client"
import Image from 'next/image'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
// import "../../../public/sass/pages/blogs.scss";
import "../../../../public/sass/pages/blogs.scss";
import Link from 'next/link';
// import NavBlog from '../../components/nav_blogs';
import BannerBlogs from '../../components/banner_blogs';
import DevPageBlog from '../../components/dev_blogs';
import ItpageBlog from '../../components/it_and_dev';
import DataBlog from '../../components/dataScience';
import HRandLCD from '../../components/HRandLCD';
import SoftSkill from '../../components/softSkill';
import BussinessPage from '../../components/bussiness';
import OfficeProductivity from '../../components/OfficeProductivity';
import Marketingpage from '../../components/maketing';
import DesignPage from '../../components/design';
import CareerAccelerator from '../../components/CareerAccelerator';
import { useState } from 'react';

const Blogs = () => {
    const [activeTab, setActiveTab] = useState('Development')
    return (
        <>
            <BannerBlogs />
            <div className="course-player">
                <div className="tabs">
                    {[
                        "Development",
                        "IT & Software",
                        "Data Science",
                        "Soft Skills",
                        "HR and L&D",
                        "Business",
                        "Office Productivity",
                        "Marketing",
                        "Design",
                        "Career Accelerator"
                    ].map((tab) => (
                        <button
                            key={tab}
                            className={activeTab === tab ? "active" : ""}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab.toUpperCase()}
                        </button>
                    ))}
                </div>
                <div className="tab-content">
                    {activeTab === "Development" && (
                        <DevPageBlog />
                    )}
                    {activeTab === "IT & Software" && (
                        <ItpageBlog />
                    )}
                    {activeTab === "Data Science" && (
                        <DataBlog />
                    )}
                    {activeTab === "Soft Skills" && (
                        <SoftSkill />
                    )}
                    {activeTab === "HR and L&D" && (
                        <HRandLCD />
                    )}
                    {activeTab === "Business" && (
                        <BussinessPage />
                    )}
                    {activeTab === "Office Productivity" && (
                        <OfficeProductivity />
                    )}
                    {activeTab === "Marketing" && (
                        <Marketingpage />
                    )}
                    {activeTab === "Design" && (
                        <DesignPage />
                    )}
                    {activeTab === "Career Accelerator" && (
                        <CareerAccelerator />
                    )}
                </div>
            </div>
        </>
    )
}

export default Blogs