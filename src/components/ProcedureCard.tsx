import type { Procedure } from 'data/procedures';

interface ProcedureCardProps {
  procedure: Procedure;
  index: number;
}

const ProcedureCard = ({ procedure, index }: ProcedureCardProps) => {
  return (
    <div
      className={`bg-card rounded-lg shadow-card p-5 border-l-4 transition-all hover:shadow-card-hover animate-fade-in ${
        procedure.singleCode ? 'border-success' : 'border-warning'
      }`}
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-accent text-accent-foreground">
              {procedure.category}
            </span>
            {!procedure.singleCode && (
              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-warning/15 text-warning-foreground">
                Viacero kódov
              </span>
            )}
          </div>
          <h3 className="text-lg font-bold text-card-foreground mb-2">
            {procedure.name}
          </h3>
          <p className="text-sm text-muted-foreground mb-2">{procedure.description}</p>
          <p className="text-xs text-muted-foreground/70 italic">{procedure.notes}</p>
        </div>
        <div className="md:text-right shrink-0">
          <div className="text-xs text-muted-foreground mb-2 font-medium">DRG kód(y):</div>
          <div className="flex flex-wrap md:flex-col gap-2">
            {procedure.codes.map((code, cIdx) => (
              <div
                key={cIdx}
                className="font-mono text-sm font-semibold bg-secondary text-secondary-foreground px-3 py-1.5 rounded-md"
              >
                {code}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcedureCard;
