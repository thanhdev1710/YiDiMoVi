import { getUser } from "@/_libs/supabase-service";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const email = url.searchParams.get("email");
    if (!email)
      return NextResponse.json({
        status: "fail",
        message: "Bạn cần phải đăng nhập",
      });
    const isUser = await getUser(email);
    if (!isUser.id)
      return NextResponse.json({
        status: "fail",
        message: "Bạn cần phải đăng nhập",
      });
    const userAgent = request.headers.get("user-agent");
    const currentTime = new Date().toISOString();

    const cookies = request.headers.get("cookie") || "";
    const previousVisitCookie = cookies
      .split("; ")
      .find((row) => row.startsWith("lastVisit="));
    const previousVisit = previousVisitCookie
      ? decodeURIComponent(previousVisitCookie.split("=")[1])
      : "Chưa có lần truy cập trước";

    const getBrowserInfo = (userAgent: any) => {
      const browsers = [
        { name: "Edge", regex: /Edg/ },
        { name: "Chrome", regex: /Chrome/ },
        { name: "Safari", regex: /Safari/ },
        { name: "Firefox", regex: /Firefox/ },
        { name: "Opera", regex: /Opera|OPR/ },
        { name: "Internet Explorer", regex: /MSIE|Trident/ },
      ];

      for (let browser of browsers) {
        if (browser.regex.test(userAgent)) {
          return browser.name;
        }
      }

      return "Unknown";
    };

    const browserInfo = getBrowserInfo(userAgent);

    const response = NextResponse.json({
      status: "success",
      userAgent,
      currentTime,
      previousVisit: decodeURIComponent(previousVisit),
      browser: browserInfo,
    });

    response.cookies.set("lastVisit", encodeURIComponent(currentTime), {
      path: "/",
      httpOnly: true,
    });

    return response;
  } catch {
    return NextResponse.json({
      status: "fail",
      message: "Bạn cần phải đăng nhập",
    });
  }
}
