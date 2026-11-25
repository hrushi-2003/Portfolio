type SectionHeadingProps = {
  id: string;
  label: string;
  title: string;
};

export default function SectionHeading({ id, label, title }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <p className="section-label">{label}</p>
      <h2 id={id} className="section-title">{title}</h2>
    </div>
  );
}
