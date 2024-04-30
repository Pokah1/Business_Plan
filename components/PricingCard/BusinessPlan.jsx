import styles from "./BusinessPlan.module.css";

const BusinessPlan = () => {
    return(
        <main className={styles.main_page}>
            <h1 className={styles.business_header}>Business Plan</h1>
            <div className={styles.articles_wrapper}>
                <article className={styles.side1}>
                    <h1 className={styles.header}> Online Fashion Store</h1>
                    <p className={styles.business_p}>
                    In today's digital age, the e-commerce industry has witnessed tremendous growth, offering vast opportunities for entrepreneurs to launch online businesses. One such lucrative venture is an online clothing boutique. With the rise of internet usage and changing consumer preferences, online clothing boutiques have become increasingly popular among fashion enthusiasts seeking convenience, variety, and style at their fingertips.
                    </p>
                    <p className={styles.business_p}>
                    The business model of an online clothing boutique revolves around sourcing, stocking, and selling a diverse range of fashion products to customers through a user-friendly e-commerce website. The boutique curates its inventory based on market trends, seasonal demand, and customer preferences, offering a mix of timeless classics and trendy pieces to cater to different style sensibilities.
                    </p>
                    <img src="/Images/fashion.jpg" alt="an team of business workers"  className={styles.images}
                     loading="lazy"
                    />
                </article>
                <article className={styles.side2}>
                    <h1 className={styles.header}>Fitness Studio</h1>
                    <p className={styles.business_p}>
                    The global fitness industry is witnessing robust growth, fueled by factors such as increasing health consciousness, rising disposable incomes, and a desire for active lifestyles,
                     Within this thriving sector, the concept of a fitness studio has emerged as a popular choice for fitness enthusiasts seeking personalized workout experiences in a supportive and motivating environment.
                    </p>
                    <img src="/Images/fitness.jpg" alt="an team of business workers" className={styles.images}
                     loading="lazy"
                    />
                </article>
            </div>
        </main>
    )
}

export default BusinessPlan;