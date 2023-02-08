export default function LabelInput({ children, name, placeholder, type = 'text', required = true, value, onChange }) {
    return (
        <div>
            <label htmlFor={name} className="block mb-2 text-sm font-medium">{children}</label>
            <input
                type={type}
                name={name}
                id={name}
                // onChange={e => setEmail(e.target.value)}
                // value={email}
                className="bg-my-gray-2 border border-my-gray-1 placeholder-my-gray-1 sm:text-sm rounded-lg focus:ring-my-mint focus:border-my-mint block w-full p-2.5"
                placeholder={placeholder}
                required={required}
            />
        </div>
    );
};