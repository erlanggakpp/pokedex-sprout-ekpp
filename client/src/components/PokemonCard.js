function PokemonCard() {
  return (
    <div className="flex flex-row max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
        </h5>
      </div>
      <div className="p-4">
        <img
          className="rounded-t-lg"
          src="https://dummyimage.com/600x800/000/fff"
          alt=""
        />
      </div>
    </div>
  );
}

export default PokemonCard;
