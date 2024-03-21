export default function Card() {
    return (
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="/">
            <img className="p-8 rounded-t-lg w-full" src="data:image/jpeg;base64,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" alt="ownwer_image1" />
            </a>
            <div className="px-5 pb-5">
                <a href="/">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
                    </h5>
                </a>
                <div className="flex items-center mt-2.5 mb-5">
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-gray-200 dark:text-gray-600"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                        4.0
                    </span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                    <a
                        href="/"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Add to cart
                    </a>
                </div>
            </div>
        </div>
    );
}
