import styles from "../styles/Features.module.css";
import calendarImg from "../assets/calender.png"
import sportsImg from "../assets/sports.png"; // Replace with actual image path
import motherChildImg from "../assets/mother_child.png"; // Replace with actual image path
import sparklesIcon from "../assets/sparkles.svg";

const Features = () => {
  const features = [
    {
      title: "Custom Calendar",
      description:
        "Our Custom Activities Calendar instantly creates a personalized activity schedule based on your preferences, budget, and location. No more endless searching or juggling calendars.",
      image: calendarImg,
    },
    {
      title: "Tailored to Your Interests",
      description:
        "Filters let you choose activities by age, category, price, and more. Social features help you sync schedules with friends and see what they’re attending.",
      image: sportsImg,
    },
    {
      title: "Stress-Free Bulk Booking",
      description:
        "Book all your child’s activities in just a few clicks. Our platform handles the details so you don’t have to.",
      image: motherChildImg,
    },
  ];

  return (
    <section className={styles.features}>
      <h2 className={styles.heading}>Why JustLiv?</h2>
      <div className={styles.cards}>
        {features.map((feature, index) => (
          <div key={index} className={styles.card}>
            <img src={sparklesIcon} alt="Sparkles" className={styles.icon} />
            <h3>{feature.title}</h3>
            <p className={styles.description}>{feature.description}</p>
            <img src={feature.image} alt={feature.title} className={styles.image} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
