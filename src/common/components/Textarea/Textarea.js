import './Textarea.scss';

function Textarea({ label }) {
	return (
		<label className="u-textarea">
			{label && <p className="u-textarea__label">{ label }</p>}
			<textarea className="u-textarea__elem" />
		</label>
	)
}

export default Textarea;