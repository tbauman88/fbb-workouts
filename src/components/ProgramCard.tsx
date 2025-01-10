interface ProgramCardProps {
  image?: string;
  title?: string;
  description?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

export const ProgramCard = ({
  image,
  title,
  description,
  onClick,
  children
}: ProgramCardProps) => (
  <article className="overflow-hidden rounded-lg bg-white shadow">
    <section
      onClick={onClick}
      className="group cursor-pointer block w-full aspect-w-16 aspect-h-9 overflow-hidden bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100"
    >
      <img
        alt=""
        src={image}
        className="pointer-events-none w-full h-full object-cover group-hover:opacity-75"
      />
    </section>

    <div className="px-4 py-4 sm:px-6">
      <h3
        onClick={onClick}
        className="group cursor-pointer text-base font-semibold leading-6 text-gray-900 uppercase"
      >
        {title}
      </h3>
      <p className="my-2 text-sm text-gray-500">{description}</p>
      {children}
    </div>
  </article>
);
