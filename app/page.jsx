const page = async () => {
  return (
    <div className="">
      <h1 className="py-3 text-lg font-bold">Server side API Rendaring</h1>
      <h1>{process.env.API_KEY}</h1>
    </div>
  );
};

export default page;
