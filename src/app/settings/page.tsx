import React from "react";
import { auth } from "../../../auth";
import {
  About,
  AffiliateDuoToneBlack,
  BadgePlus,
  Bell,
  BriefCaseDuoToneBlack,
  BriefCaseDuoToneWhite,
  Buisness,
  CarotSort,
  Chat,
  Comment,
  Courses,
  Dashboard,
  Document,
  Empty,
  EmptyCircle,
  Envalope,
  ExclaimationMark,
  Explore,
  FileDuoToneBlack,
  Fitness,
  Google,
  Grid,
  Heart,
  HomeDuoToneWhite,
  Home,
  IDuotoneBlack,
  LifeStyle,
  Like,
  Links,
  Logout,
  MegaPhone,
  
  Message,
  Music,
  PersonalDevelopment,
  PurpleCheck,
  Settings,
  SocialMedia,
  Tech,
  Unlike,
  WhiteLabel,
  
  GlobeDuoToneBlack,
  MegaPhoneDuoToneBlack,
  MegaPhoneDuoToneWhite,
  ZapDouToneBlack,
} from "@/icons";
import { Plus } from "@/icons/plus";

const page = async () => {
  const session = await auth();
  if (session?.user) {
    return (
      <div>
        {JSON.stringify(session.user)}
        <p>
          1. <About />
        </p>
        <p>
          2. <AffiliateDuoToneBlack />
        </p>
        <p>
          3. <BadgePlus />
        </p>
        <p>
          4. <Bell />
        </p>
        <p>
          5. <BriefCaseDuoToneBlack />
        </p>
        <p>
          6. <BriefCaseDuoToneWhite />
        </p>
        <p>
          7. <Buisness />
        </p>
        <p>
          8. <CarotSort />
        </p>
        <p>
          9. <Chat />
        </p>
        <p>
          10. <Comment />
        </p>
        <p>
          11. <Courses />
        </p>
        <p>
          12. <Dashboard />
        </p>
        <p>
          13. <Document />
        </p>
        <p>
          14. <Empty />
        </p>
        <p>
          15. <EmptyCircle />
        </p>
        <p>
          16. <Envalope />
        </p>
        <p>
          17. <ExclaimationMark />
        </p>
        <p>
          18. <Explore />
        </p>
        <p>
          19. <FileDuoToneBlack />
        </p>
        <p>
          20. <Fitness />
        </p>
        <p>
          21. <GlobeDuoToneBlack />
        </p>
        <p>
          22. <Google />
        </p>
        <p>
          23. <Grid />
        </p>
        <p>
          24. <Heart />
        </p>
        <p>
          25. <HomeDuoToneWhite />
        </p>
        <p>
          26. <Home />
        </p>
        <p>
          27. <IDuotoneBlack />
        </p>
        <p>
          28. <LifeStyle />
        </p>
        <p>
          29. <Like />
        </p>
        <p>
          30. <Links />
        </p>
        <p>
          31. <Logout />
        </p>
        <p>
          32. <MegaPhone />
        </p>
        <p>
          33. <MegaPhoneDuoToneBlack />
        </p>
        <p>
          34. <MegaPhoneDuoToneWhite />
        </p>
        <p>
          35. <Message />
        </p>
        <p>
          36. <Music />
        </p>
        <p>
          37. <PersonalDevelopment />
        </p>
        <p>
          38. <PurpleCheck />
        </p>
        <p>
          39. <Settings />
        </p>
        <p>
          40. <SocialMedia />
        </p>
        <p>
          41. <Tech />
        </p>
        <p>
          42. <Unlike />
        </p>
        <p>
          43. <WhiteLabel />
        </p>
        <p>
          44. <ZapDouToneBlack />
        </p>
        45.<Plus/>
      </div>
    );
  }
};

export default page;
