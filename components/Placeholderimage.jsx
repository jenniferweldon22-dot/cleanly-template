function PlaceholderImage({ label, aspect = "aspect-[4/3]", className = "" }) {
  return (
    <div className={`${aspect} ${className} rounded-3xl bg-surface border border-ink/10 flex items-center justify-center p-8 text-center`}>
      <p className="text-stone text-sm max-w-xs">{label}</p>
    </div>
  )
}

export default PlaceholderImage
