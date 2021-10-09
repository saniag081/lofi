import './Textarea.scss';

function Textarea({ label, ...all }) {
	return (
		<label className="u-textarea">
			{label && <p className="u-textarea__label">{ label }</p>}
			<textarea className="u-textarea__elem" {...all} />
		</label>
	)
}

export default Textarea;