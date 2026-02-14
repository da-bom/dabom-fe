const TextField = ({
  label,
  children,
  description,
}: {
  label: string;
  children: React.ReactNode;
  description?: string;
}) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-4 items-center">
        <span className="text-body1-d w-12 text-right">{label}</span>
        {children}
      </div>
      {description && (
        <span className="ml-16 text-gray-700 text-body2-d">{description}</span>
      )}
    </div>
  );
};

export default TextField;
