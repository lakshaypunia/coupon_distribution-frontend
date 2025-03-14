

const Loader = (size) => { 

    return (
        <div
        //   className={cn(loaderVariants({ size }))}
          role="status"
          aria-label="Loading"
        >
          <div className="flex space-x-1">
            <div className="h-2 w-2 animate-bounce rounded-full bg-current [animation-delay:-0.3s]"></div>
            <div className="h-2 w-2 animate-bounce rounded-full bg-current [animation-delay:-0.15s]"></div>
            <div className="h-2 w-2 animate-bounce rounded-full bg-current"></div>
          </div>
          <span className="sr-only">Loading</span>
        </div>
      )
    }

export default Loader