function CountUpStat({ value }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCount(0);
          setIsVisible(false);

          requestAnimationFrame(() => {
            setIsVisible(true);
          });
        } else {
          setIsVisible(false);
          setCount(0);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  const match = value.match(/^([\d.]+)(.*)$/);
  const number = match ? parseFloat(match[1]) : 0;
  const suffix = match ? match[2] : "";

  useEffect(() => {
    if (!isVisible) return;

    let startTime = null;
    let animationFrame;

    const duration = 1400;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;

      const progress = Math.min(
        (currentTime - startTime) / duration,
        1
      );

      // Ease-out
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setCount(
        number % 1 === 0
          ? Math.floor(easedProgress * number)
          : (easedProgress * number).toFixed(1)
      );

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(number);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, number]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}