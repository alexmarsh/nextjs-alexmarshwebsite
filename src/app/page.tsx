// src/app/page.tsx

'use client'

import Link from 'next/link';
import clsx from "clsx";
import useAnimateOnScroll from '@/hooks/useAnimateOnScroll'
import useSmoothScroll from '@/hooks/useSmoothScroll';
import styles from "./page.module.scss";

export default function Home() {
    useAnimateOnScroll()
    useSmoothScroll()

    return (
        <main className="site-main">
            <header className={styles.pageHeader}>
                <div className={styles.contentWrapper}>
                    <h1 className="animate">Alex Marsh</h1>
                    <hr className="animate" />
                    <h2 className="animate">Web Design &amp; Development</h2>
                    <div className={clsx(styles.ctaWrapper, "animate")}>
                        <Link className="button button--inverted" href="/contact/" prefetch={false}>Get in Touch</Link>
                        <a className="button button--inverted" href="#intro">Learn More</a>
                    </div>
                </div>
            </header>
            <section id="intro" className={clsx("section", styles.intro)}>
                <div className="container">
                    <div className={clsx(styles.contentWrapper, "narrow-content animate")}>
                        <div className="section-header">
                            <h2>Let me help you build your next website.</h2>
                            <h3>I understand what my clients want—and deliver.</h3>
                        </div>
                        <p>With over a decade of experience building websites for a wide range of industries, including banking, legal, medical and more, I have a trusted background that can help you take your business to the next level. From simple websites to complex custom applications, I work closely with my clients to understand their needs and build solutions that meet them.</p>
                    </div>
                </div>
            </section>
            <section className={clsx("section", styles.services)}>
                <div className="container">
                    <div className="section-header animate">
                        <h2>Services</h2>
                        <h3>What can I do for you?</h3>
                    </div>
                    <div className={styles.servicesWrapper}>
                        <div className={styles.service}>
                            <div className={clsx(styles.svgWrapper, "animate")}>
                                <svg viewBox="-2 104 174 157" xmlSpace="preserve">
                                    <g>
                                        <path d="M71.131,196.747v10.424l-37.057-16.063v-8.915l37.057-16.06v10.498l-25.82,9.949L71.131,196.747z M94.045,165.911l-10.317,42.474c-0.343,1.398-0.643,2.506-0.9,3.316c-0.259,0.811-0.649,1.446-1.178,1.894 c-0.528,0.456-1.295,0.683-2.304,0.683c-2.501,0-3.756-1.084-3.756-3.241c0-0.565,0.245-1.978,0.736-4.235l10.277-42.475 c0.541-2.258,1.057-3.805,1.547-4.639c0.49-0.834,1.447-1.252,2.874-1.252c1.227,0,2.167,0.294,2.817,0.883 c0.649,0.59,0.976,1.401,0.976,2.432C94.82,162.511,94.559,163.899,94.045,165.911z M136.297,191.109l-37.056,16.136v-10.426l25.897-10.167l-25.897-10.021v-10.351l37.056,15.985V191.109z"></path>
                                        <path d="M160.15,106.281H10.223C4.578,106.281,0,110.86,0,116.503v129.485c0,5.642,4.578,10.223,10.223,10.223H160.15 c5.646,0,10.223-4.581,10.223-10.223V116.503C170.373,110.857,165.796,106.281,160.15,106.281z  M134.595,113.096 c3.755,0,6.813,3.056,6.813,6.815c0,3.758-3.059,6.813-6.813,6.813c-3.759,0-6.815-3.055-6.815-6.813C127.779,116.152,130.835,113.096,134.595,113.096z M115.854,113.096c3.756,0,6.813,3.056,6.813,6.815 c0,3.758-3.057,6.813-6.813,6.813c-3.758,0-6.815-3.055-6.815-6.813C109.039,116.152,112.096,113.096,115.854,113.096z M160.15,245.989H10.223V133.54H160.15V245.989L160.15,245.989z M153.335,126.725c-3.755,0-6.814-3.055-6.814-6.813 c0-3.76,3.059-6.815,6.814-6.815c3.756,0,6.815,3.056,6.815,6.815C160.15,123.67,157.091,126.725,153.335,126.725z"></path>
                                    </g>
                                </svg>
                            </div>
                            <div className={clsx(styles.contentWrapper, "animate")}>
                                <h3>Web Development</h3>
                                <p>Fully customized modern websites with appealing designs that suit your business needs.</p>
                            </div>
                        </div>
                        <div className={styles.service}>
                            <div className={clsx(styles.svgWrapper, "animate")}>
                                <svg viewBox="-1 -1 102.5 102" xmlSpace="preserve">
                                    <g>
                                        <path d="M80.001,38.8c0-0.3,0-0.7,0-1c0-0.4,0-0.8-0.102-1.101c0-0.5-0.1-1-0.199-1.5c0-0.199,0-0.399-0.1-0.5l0,0
C78.8,28.8,76.701,22.899,73.3,17.8l0,0c-0.5-0.7-0.9-1.4-1.5-2c0,0,0,0-0.101-0.101c-1.101-1.399-2.199-2.699-3.5-4
c-0.5-0.5-1-0.899-1.5-1.399c-0.101-0.101-0.199-0.2-0.3-0.3c-0.399-0.301-0.7-0.601-1.1-0.9c-0.301-0.3-0.701-0.6-1-0.8
c0,0,0,0-0.102,0l0,0C57.5,3.099,48.999,0,39.898,0c-22,0-39.899,17.899-39.899,39.899s17.9,39.9,39.899,39.9
c12.182,0,23.199-5.519,30.606-14.197c0.863-1.012,1.678-2.066,2.439-3.16c4.505-6.468,7.157-14.307,7.157-22.743
C80.101,39.399,80.101,39.099,80.001,38.8z M40.201,74.325c-19.043,0-34.526-15.483-34.526-34.525
c0-19.042,15.483-34.526,34.526-34.526c7.982,0,15.387,2.789,21.254,7.31l0,0c0.096,0.095,0.096,0.095,0.192,0.191 c3.27,2.597,6.155,5.867,8.27,9.521l0,0c1.443,2.404,2.501,4.904,3.271,7.501l0,0c1.251,4.135,1.732,8.367,1.345,12.599l0,0
C73.283,60.188,58.376,74.325,40.201,74.325z M98.501,88L72.944,62.442c-0.8,1.101-1.64,2.16-2.439,3.16L95.702,90.8c1.2,1.199,1.2,3.1,0,4.199
c-0.601,0.601-1.3,0.899-2.101,0.899c-0.799,0-1.6-0.3-2.1-0.899L66.33,69.827c-1,0.899-2.025,1.674-3.127,2.475L88.701,97.8
c1.4,1.398,3.199,2.1,5,2.1s3.602-0.7,5-2.1C101.202,95.199,101.202,90.8,98.501,88z M66.802,23.481L66.802,23.481c0-0.099-0.098-0.099-0.098-0.198c-0.298-0.396-0.495-0.791-0.792-1.187
c-0.099-0.098-0.197-0.198-0.298-0.395c-0.295-0.494-0.69-0.891-0.988-1.385l-0.098-0.099c-0.397-0.495-0.792-0.891-1.188-1.385l0,0
c-5.735-6.33-14.042-10.384-23.24-10.384c-17.208,0-31.25,13.944-31.25,31.25S22.795,70.95,40.102,70.95
c16.317,0,29.768-12.56,31.152-28.581l0,0v-0.098c0-0.297,0.1-0.594,0.1-0.791l0,0C71.65,35.249,70.166,28.92,66.802,23.481z
M40.205,67.024c-15.046,0-27.323-12.278-27.323-27.325c0-15.046,12.276-27.323,27.323-27.323c8.493,0,16.155,3.877,21.14,10.063 	l0.092,0.091c0.645,0.832,1.292,1.754,1.938,2.677c3.23,5.168,4.615,11.169,4.062,16.984l0,0 C66.145,56.131,54.42,67.024,40.205,67.024z"></path>
                                    </g>
                                </svg>
                            </div>
                            <div className={clsx(styles.contentWrapper, "animate")}>
                                <h3>SEO &amp; Analytics</h3>
                                <p>Search Engine Optimization helps improve your search rankings and drives traffic to your site.</p>
                            </div>
                        </div>
                        <div className={styles.service}>
                            <div className={clsx(styles.svgWrapper, "animate")}>
                                <svg viewBox="-0.054 25.375 500.107 425.25" xmlSpace="preserve">
                                    <g>
                                        <rect x="250" y="190.5" width="197.166" height="22.638"></rect>
                                        <rect x="250" y="225.681" width="197.166" height="22.638"></rect>
                                        <rect x="55.404" y="78.854" width="391.761" height="84.314"></rect>
                                        <path strokeLinecap="square" d="M55.404,190.5v208.605H224.5V190.5H55.404z M197.9,319.153c0.864,0.865,1.152,2.018,1.152,3.17 c0,1.153-0.576,2.306-1.152,3.17l-27.665,27.377c-0.864,0.864-2.018,1.152-3.17,1.152c-1.153,0-2.306-0.288-3.17-1.152 l-30.259-30.835l-16.426,29.971c-0.865,1.44-2.306,2.306-3.746,2.306c-0.288,0-0.288,0-0.577,0c-1.729-0.289-3.17-1.441-3.746-3.17 l-28.817-110.66c-0.288-1.441,0-3.171,1.152-4.035c0.865-0.864,2.018-1.152,3.17-1.152c0.288,0,0.865,0,1.153,0l110.659,28.818 c1.729,0.576,2.882,2.017,3.17,3.746c0.289,1.729-0.576,3.458-2.305,4.322l-30.259,16.426L197.9,319.153z M15.431,448.625c-7.439,0-13.484-6.045-13.484-13.02V40.394c0-6.974,6.045-13.019,13.484-13.019h469.14 c7.439,0,13.483,6.045,13.483,13.019v395.211c0,6.975-6.044,13.02-13.483,13.02H15.431z M28.914,421.959h441.707V54.841H28.914
V421.959L28.914,421.959z"></path>
                                        <path d="M411.851,351.394l-13.483-7.78l-1.557-0.776l0.26-1.815c0.519-2.594,0.778-5.446,0.778-8.039 s-0.26-5.444-0.778-8.298l-0.26-1.814l1.557-1.037l13.483-7.778c0.777-0.519,1.297-1.297,1.297-2.074c0-0.26,0-0.778-0.52-0.778 l-13.224-22.818c-0.519-1.037-2.074-1.556-3.111-0.779l-13.483,7.78l-1.557,0.778l-1.296-1.038
c-4.148-3.63-9.075-6.482-14.003-8.297l-1.814-0.519v-1.816v-15.558c0-1.296-1.037-2.333-2.333-2.333h-26.708 c-1.297,0-2.334,1.037-2.334,2.333v15.818v1.814l-1.556,0.519c-2.853,1.038-5.444,2.075-7.521,3.372 c-2.334,1.296-4.406,2.852-6.741,4.667l-1.297,1.037l-1.556-0.778l-13.483-7.78c-1.037-0.776-2.335-0.258-3.111,0.779 l-13.225,22.818c-0.259,0.259-0.259,0.519-0.259,1.037c0,0.777,0.519,1.556,1.296,2.074l13.484,7.779l1.556,0.777v1.814 c-0.52,2.594-0.778,5.446-0.778,8.04c0,2.592,0.259,5.444,0.778,8.297l0.259,1.815l-1.555,0.776l-13.225,7.78 c-0.778,0.519-1.297,1.297-1.297,2.074c0,0.259,0,0.777,0.26,1.038l13.224,22.817c0.519,1.037,2.075,1.556,3.111,0.777 l13.484-7.779l1.557-0.777l1.295,1.037c4.149,3.631,9.076,6.482,14.002,8.298l1.815,0.519v1.815v15.558 c0,1.297,1.037,2.335,2.333,2.335h26.19c1.296,0,2.333-1.038,2.333-2.335v-15.817v-1.815l1.556-0.518 c2.853-1.037,5.444-2.075,7.52-3.371c2.334-1.297,4.408-2.852,6.742-4.668l1.296-1.037l1.557,0.777l13.483,7.779 c0.518,0.26,1.296,0.52,1.814,0.26c0.778,0,1.297-0.519,1.557-1.037l13.225-22.817c0.259-0.261,0.259-0.52,0.259-1.038 C413.147,352.69,412.628,351.652,411.851,351.394z M348.582,366.555c-18.687,0-33.832-15.146-33.832-33.83 c0-18.686,15.146-33.833,33.832-33.833c18.685,0,33.832,15.147,33.832,33.833C382.414,351.408,367.267,366.555,348.582,366.555z"></path>
                                    </g>
                                </svg>
                            </div>
                            <div className={clsx(styles.contentWrapper, "animate")}>
                                <h3>Content Management</h3>
                                <p>Control all of your content quickly and easily with a built-in Content Management System.</p>
                            </div>
                        </div>
                    </div>
                    <div className={clsx(styles.servicesFooter, "animate")}>
                        <p>Looking for something not shown here?</p>
                        <Link className="button" href="/services/" prefetch={false}>View More Services ›</Link>
                    </div>
                </div>
            </section>
            <section className={clsx("section", styles.cta)}>
                <div className="container">
                    <div className={clsx(styles.contentWrapper, "narrow-content animate")}>
                        <h2>Are you looking for a high quality website for your organization or company at an affordable price?</h2>
                        <Link className="button--inverted" href="/contact/" prefetch={false}>Request Free Consultation</Link>
                    </div>
                </div>
            </section>
        </main>
    )
}
