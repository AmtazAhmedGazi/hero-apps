import React, { useState, useEffect } from "react";
import { useLoaderData, useParams } from "react-router";
import iconDownload from "../../assets/icon-downloads.png";
import iconRatings from "../../assets/icon-ratings.png";
import iconReview from "../../assets/icon-review.png";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { addToStoredDB, getStoredApp } from "../../utility/addToDB";

const AppDetails = () => {
  const { id } = useParams();
  const appId = parseInt(id);
  const data = useLoaderData();
  const singleApp = data.find((app) => app.id === appId);
  const {
    title,
    companyName,
    image,
    ratingAvg,
    downloads,
    description,
    size,
    reviews,
    ratings,
  } = singleApp;

  const [installed, setInstalled] = useState(false);

  useEffect(() => {
    const installedApps = getStoredApp();
    if (installedApps.map(Number).includes(appId)) {
      setInstalled(true);
    }
  }, [appId]);

  const handleInstall = (id) => {
    addToStoredDB(id);
    setInstalled(true);
  };

  let downloadsCount = parseInt(downloads, 10);
  let downloadsCountWord = "";

  if (downloadsCount >= 1_000_000) {
    downloadsCountWord = `${(downloadsCount / 1_000_000).toFixed(1)}M`;
  } else {
    downloadsCountWord = `${(downloadsCount / 1_000).toFixed(1)}K`;
  }

  let reviewCount = parseInt(reviews, 10);
  let reviewCountWord = "";

  if (downloadsCount >= 1_000_000) {
    reviewCountWord = `${(reviewCount / 1_000_000).toFixed(1)}M`;
  } else {
    reviewCountWord = `${(reviewCount / 1_000).toFixed(1)}K`;
  }
  const chartData = [...ratings].reverse();

  return (
    <div className="bg-gray-100 p-10">
      <div className="flex max-w-260 mx-auto">
        <img src={image} alt="" className="mr-10 w-60" />
        <div>
          <h3 className="text-2xl font-bold mb-1">
            {title} : {description}
          </h3>
          <h5 className="text-[#627382]">
            Developed by
            <span className="text-[#9F62F2] font-bold mb-2">
              {" "}
              {companyName}
            </span>
          </h5>
          <div className="divider mb-2"></div>
          <div className="flex gap-10">
            <div>
              <img src={iconDownload} alt="" className="w-8 h-8" />
              <h5 className="text-xs  mt-2">Downloads</h5>
              <h3 className="font-bold text-3xl mb-1">{downloadsCountWord}</h3>
            </div>
            <div>
              <img src={iconRatings} alt="" className="w-8 h-8" />
              <h5 className="text-xs  mt-2">Average Ratings</h5>
              <h3 className="font-bold text-3xl mb-1">{ratingAvg}</h3>
            </div>
            <div>
              <img src={iconReview} alt="" className="w-8 h-8" />
              <h5 className="text-xs  mt-2">Total Reviews</h5>
              <h3 className="font-bold text-3xl mb-1">{reviewCountWord}</h3>
            </div>
          </div>
          <button
            onClick={() => handleInstall(id)}
            disabled={installed}
            className="btn btn-active btn-accent text-white mt-4"
          >
            {installed ? "Installed" : `Install Now (${size} MB)`}
          </button>
        </div>
      </div>
      <div className="divider mb-2"></div>
      <h3 className="font-bold text-lg">Ratings</h3>
      <div>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            layout="vertical"
            data={chartData}
            margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
          >
            <XAxis type="number" axisLine={false} tickLine={false} />
            <YAxis
              dataKey="name"
              type="category"
              width={40}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip />
            <Bar dataKey="count" fill="#FF8811" barSize={30}></Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="divider mb-2"></div>
      <div>
        <h3 className="font-bold text-lg mb-4">Description</h3>
        <h4>
          This focus app takes the proven Pomodoro technique and makes it even
          more practical for modern lifestyles. Instead of just setting a timer,
          it builds a complete environment for deep work, minimizing
          distractions and maximizing concentration. Users can create custom
          work and break intervals, track how many sessions they complete each
          day, and review detailed statistics about their focus habits over
          time. The design is minimal and calming, reducing cognitive load so
          you can focus entirely on the task at hand. Notifications gently let
          you know when to pause and when to resume, helping you maintain a
          healthy rhythm between work and rest.
          <br />
          <br />
          A unique feature of this app is the integration of task lists with
          timers. You can assign each task to a specific Pomodoro session,
          making your schedule more structured. The built-in analytics show not
          only how much time you’ve worked but also which tasks consumed the
          most energy. This allows you to reflect on your efficiency and adjust
          your workflow accordingly. The app also includes optional background
          sounds such as white noise, nature sounds, or instrumental music to
          create a distraction-free atmosphere.
          <br />
          <br />
          For people who struggle with procrastination, the app provides
          motivational streaks and achievements. Completing multiple Pomodoro
          sessions unlocks milestones, giving a sense of accomplishment. This
          gamified approach makes focusing more engaging and less like a chore.
          Whether you’re studying for exams, coding, writing, or handling office
          work, the app adapts to your routine. By combining focus tracking,
          task management, and motivational tools, this Pomodoro app ensures
          that you not only work harder but also smarter. It is a personal
          trainer for your brain, keeping you disciplined, refreshed, and
          productive throughout the day.
        </h4>
      </div>
    </div>
  );
};

export default AppDetails;
