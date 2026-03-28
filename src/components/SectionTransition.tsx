const SectionTransition = ({ reverse = false }: { reverse?: boolean }) => (
  <div
    className={`h-12 ${
      reverse
        ? 'bg-gradient-to-b from-secondary to-background'
        : 'bg-gradient-to-b from-background to-secondary'
    }`}
  />
);

export default SectionTransition;
