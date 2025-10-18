export function PostNotSelected() {
  return (
    <div className="flex flex-col justify-center items-center gap-1 h-full w-3/4 mx-auto">
      <h4 className="text-xl font-semibold font-geist">No job offer was selected.</h4>
      <p className="text-center text-balance text-base text-muted-foreground tracking-tight">
        Please select a job offer by clicking the Details button on the job post.
      </p>
    </div>
  );
}
