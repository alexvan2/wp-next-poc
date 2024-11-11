import { NextRequest, NextResponse } from "next/server";
import { revalidatePath, revalidateTag } from "next/cache";

export async function PUT(request: NextRequest) {
  const requestBody = await request.text();
  const requestBodyObject = JSON.parse(requestBody);
  const { paths, post } = requestBodyObject ?? { paths: [], post: {} };
  let revalidated = false;

  const tags = requestBodyObject?.tags ?? post ? ["wordpress"] : [];

  try {
    if (paths && Array.isArray(paths) && paths.length > 0) {
      Promise.all(paths.map((path) => revalidatePath(path)));
      console.log("Revalidated paths:", paths);
      revalidated = true;
    }

    if (tags && Array.isArray(tags) && tags.length > 0) {
      Promise.all(tags.map((tag) => revalidateTag(tag)));
      console.log("Revalidated tags:", tags);
      revalidated = true;
    }

    return NextResponse.json({
      revalidated,
      now: Date.now(),
      paths,
      tags: tags,
    });
  } catch {
    return NextResponse.json(
      { message: "Error revalidating paths or tags" },
      { status: 500 }
    );
  }
}
