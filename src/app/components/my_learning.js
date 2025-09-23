'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import '../../../public/sass/pages/my_learning.scss';

const MyLearning = () => {
  const [activeTab, setActiveTab] = useState('all');

  const [courses, setCourses] = useState([
    {
      id: 1,
      title: 'Complete Web Development Bootcamp',
      thumbnail: '/images/analytics_imagethree.webp',
      progress: 40,
    },
    {
      id: 2,
      title: 'JavaScript Mastery: From Basics to Advanced',
      thumbnail: '/images/analytics_imagetwo.webp',
      progress: 75,
    },
  ]);

  return (
    <section className="mylearning">
      <div className="header">
        <h2>My learning</h2>
        <nav className="tabs">
          <ul>
            <li
              className={activeTab === 'all' ? 'active' : ''}
              onClick={() => setActiveTab('all')}
            >
              All courses
            </li>
            <li
              className={activeTab === 'lists' ? 'active' : ''}
              onClick={() => setActiveTab('lists')}
            >
              My Lists
            </li>
            <li
              className={activeTab === 'wishlist' ? 'active' : ''}
              onClick={() => setActiveTab('wishlist')}
            >
              Wishlist
            </li>
            <li
              className={activeTab === 'archived' ? 'active' : ''}
              onClick={() => setActiveTab('archived')}
            >
              Archived
            </li>
            <li
              className={activeTab === 'tools' ? 'active' : ''}
              onClick={() => setActiveTab('tools')}
            >
              Learning tools
            </li>
          </ul>
        </nav>
      </div>

      <div className="content">
        {/* All courses Tab */}
        {activeTab === 'all' && (
          <>
            {courses.length === 0 ? (
              <div className="empty">
                <h3>Start learning today.</h3>
                <p>
                  When you purchase a course, it will appear here.&nbsp;
                  <Link href="#">Browse now.</Link>
                </p>
              </div>
            ) : (
              <div className="course-grid">
                {courses.map((course) => (
                  <div key={course.id} className="course-card">
                    <Image
                      src={course.thumbnail}
                      alt={course.title}
                      width={300}
                      height={180}
                    />
                    <h4>{course.title}</h4>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                    <p>{course.progress}% complete</p>
                  </div>
                ))}
              </div>
            )}
          </>
        )}

        {/* Other Tabs */}
        {activeTab === 'lists' && (
          <div className="empty">
            <p>No custom lists yet.</p>
          </div>
        )}
        {activeTab === 'wishlist' && (
          <div className="empty">
            <p>Your wishlist is empty.</p>
          </div>
        )}
        {activeTab === 'archived' && (
          <div className="empty">
            <p>No archived courses.</p>
          </div>
        )}
        {activeTab === 'tools' && (
          <div className="empty">
            <p>Learning tools coming soon.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default MyLearning;
