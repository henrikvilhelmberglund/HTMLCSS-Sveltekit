// export const modules = import.meta.glob("./*.svx");

const modules = import.meta.glob(["./pages/*.svx"]);
let myPages = [];
for (let path in modules) {
  // console.log(path);
  let fixedPath = path.replace(".svx", "");
  const post = await import(
    `./pages/${fixedPath.substring(fixedPath.lastIndexOf("/") + 1)}.svx`
  );
  // let fixedPath = path;
  myPages.push({
    title: fixedPath.substring(fixedPath.lastIndexOf("/") + 1),
    link: fixedPath,
    original: path,
    newbody: post.default,
  });
}

export async function load({ params }) {
  return {
    titles: modules,
    myPages,
    // meta: post.metadata
  };
}
