import React from 'react';

const Blog = () => {
    const blogPosts = [
        {
            id: 1,
            title: 'How to Make Better User Interface',
            imageUrl: 'images/blog/1.jpg',
            content: 'Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...',
        },
        {
            id: 2,
            title: '10 Web Design Tips From Experts',
            imageUrl: 'images/blog/2.jpg',
            content: 'Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...',
        },
        {
            id: 3,
            title: 'The Importance of Web Design',
            imageUrl: 'images/blog/3.jpg',
            content: 'Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...',
        },
        // Add more blog posts as needed
    ];

    return (
        <div>
            <section id="section-blog" className="no-bottom">
                <div className="container relative">
                    <div className="row">
                        <div className="col-md-12 text-center wow fadeInUp">
                            <h2>Recent Blog</h2>
                            <div className="space-border"></div>
                        </div>
                    </div>
                    <div id="carousel-blog" className="owl-carousel wow fadeInUp">
                        {blogPosts.map((post) => (
                            <div key={post.id} className="bloglist item">
                                <div className="post-content">
                                    <div className="post-image">
                                        <div className="de_modal" data-url="single-blog.html">
                                            <img alt="" src={post.imageUrl} className="lazy grayscale" />
                                        </div>
                                    </div>
                                    <div className="post-text">
                                        <h4 className="de_modal" data-url="single-blog.html">{post.title}</h4>
                                        <p>{post.content}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;
