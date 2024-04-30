import styles from "./PricingCard.module.css";

const PricingCard = ({
  label,
  price,
  duration = "",
  image,
  imageAlt,
  benefits,
}) => {
  const themeClasses = {
    "Start Up": styles["card--startup"],
    Pro: styles["card--pro"],
    Enterprise: styles["card--enterprise"],
  };

  const themeClass = themeClasses[label];

  return (
    <div className={`${styles.card} ${themeClass}`}>
      <div className={styles.card_wrapper}>
        <span className={styles.card_label}>{label}</span>
        <div className={styles.card_image}>
          <img src={image} alt={imageAlt} />
        </div>
        <div className={styles.card_priceLabel}>
          <span className={styles.card_price_figure}>{price}</span>
          {duration === "" ? null : (
            <span className={styles.price_duration}>{duration}</span>
          )}
        </div>
        <p className={styles.card_benefits_label}>Everything in Free, Plus</p>
        <ul className={styles.card_benefits}>
          {benefits.map((benefit) => {
            return (
              <li key={benefit} className={styles.card_benefit}>
                <img
                  src="/Images/icon.svg"
                  alt=""
                  className={styles.card_benefit_icon}
                />
                {benefit}
              </li>
            );
          })}
        </ul>
        <button className={styles.card_button}>Choose Now</button>
      </div>
    </div>
  );
};
export default PricingCard;
