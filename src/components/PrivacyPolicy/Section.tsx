interface SectionProps {
  title: string;
  children: React.ReactNode;
  isLast?: boolean;
}

function Section({ title, children, isLast = false }: SectionProps) {
  return (
    <div className={`mb-12 pb-8 ${!isLast ? 'border-b border-gray-200' : ''}`}>
      <h2 className="text-3xl font-bold font-serif text-[#003366] mb-4">
        {title}
      </h2>
      <div className="font-['Cambria',serif] text-lg leading-relaxed text-gray-700 space-y-4">
        {children}
      </div>
    </div>
  );
}

export default Section;
