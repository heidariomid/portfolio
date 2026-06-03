import {useEffect} from 'react';

// Adds the `in` class to every `.reveal` element as it scrolls into view,
// mirroring the IntersectionObserver from the design prototype. Re-runs the
// scan whenever `deps` change so dynamically rendered sections get observed.
const useReveal = (deps = []) => {
	useEffect(() => {
		const els = document.querySelectorAll('.reveal:not(.in)');
		if (!els.length) return;

		const io = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('in');
						io.unobserve(entry.target);
					}
				});
			},
			{threshold: 0.12, rootMargin: '0px 0px -8% 0px'},
		);

		els.forEach((el) => io.observe(el));
		return () => io.disconnect();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, deps);
};

export default useReveal;
