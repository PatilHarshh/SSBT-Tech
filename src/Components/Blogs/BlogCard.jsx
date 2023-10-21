import React from "react";
import './Blogs.css'
import blog1 from "./src/blog1.png";
import blog2 from "./src/blog2.png";


export function BlogCard() {
    return (
        <section class="dark">
            <div class="container py-4">
                <h1 class="h1 text-center" id="pageHeaderTitle">Reading Stuffs</h1>

                <article class="postcard dark blue">
                    <a class="postcard__img_link" href="#">
                        <img class="postcard__img" src={blog1} alt="Image Title" />
                    </a>
                    <div class="postcard__text">
                        <h1 class="postcard__title blue"><a href="#">Hackathon at SSBT</a></h1>
                        <div class="postcard__subtitle small">
                            <time datetime="2020-05-25 12:00:00">
                                <i class="fas fa-calendar-alt mr-2"></i>Mon, Oct 30th 2023
                            </time>
                        </div>
                        <div class="postcard__bar mt-2"></div>
                        <div class="postcard__preview-txt">Join us at SSBT College for an exhilarating hackathon, where innovative minds come together to solve real-world problems through creative coding and teamwork.</div>
                        <div class="postcard__preview-txt mt-2">At the SSBT College hackathon, you'll have the opportunity to showcase your programming skills, collaborate with peers, and build solutions that could change the future</div>
                        
                    </div>
                </article>
                <article class="postcard dark blue">
                    <a class="postcard__img_link" href="#">
                        <img class="postcard__img" src={blog2} alt="Image Title" />
                    </a>
                    <div class="postcard__text">
                        <h1 class="postcard__title blue"><a href="#">Community Intro</a></h1>
                        <div class="postcard__subtitle small">
                            <time datetime="2020-05-25 12:00:00">
                                <i class="fas fa-calendar-alt mr-2"></i>Wed, Oct 25th 2023
                            </time>
                        </div>
                        <div class="postcard__bar mt-2"></div>
                        <div class="postcard__preview-txt">SSBT Community is a vibrant and inclusive network of students, faculty, and staff at SSBT College, fostering a culture of learning, innovation, and collaboration. We pride ourselves on creating an environment where knowledge is shared, talents are nurtured, and lifelong friendships are formed.</div>
                        <div class="postcard__preview-txt mt-2">Together, we aim to inspire and empower individuals to achieve their academic and personal goals while making a positive impact on the world</div>
                        
                    </div>
                </article>
            </div>
        </section>

    );
}