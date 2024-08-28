"use client";
import { useSession, signOut } from "next-auth/react";
import NavDashboard from "@/components/NavDashboard";
import Head from "next/head";
import { useState } from "react";
import MobileNav from "@/components/MobileNav";
import Hero from "@/components/LandingPage/Hero";
import { CarouselDemo } from "@/components/LandingPage/Carousel";
import NavigationPage from "@/components/LandingPage/NavigationPage";

const Dashboard = () => {
	const { data: session } = useSession();
	console.log(JSON.stringify(session));

	const userId = session?.user?.id;

	const [nav, setNav] = useState(false);
	const openNav = () => setNav(true);
	const closeNav = () => setNav(false);
	return (
		<>
			<Head>
				<title>Medifriends</title>
			</Head>
			<div id="landing-hero-section" className="mt-[6rem]">
				<Hero />
			</div>
			<div>
				<NavigationPage />
			</div>
			{/* Nav */}
			<MobileNav nav={nav} closeNav={closeNav} />
			<NavDashboard openNav={openNav} closeNav={closeNav} />
			<div id="landing-carousel-section">
				<CarouselDemo />
			</div>
		</>
	);
};

export default Dashboard;