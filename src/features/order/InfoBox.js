import Button from "../../components/Button";

export default function InfoBox({ children }) {
    return (
        <div className="flex flex-col justify-between w-full px-4 gap-4">
            <div>{children}</div>
            <div className="text-xs h-full">detail: {'Lorem ipsum dolor sit amet, vis volutpat repudiare eu, ut his prodesset adolescens reprimique. Vim phaedrum reprimique te, an habeo elaboraret usu'}</div>
            <div className="flex justify-end">
                <Button size="text-xs" theme="my-gray-1" p="px-2 py-1" >edit note</Button>
            </div>
        </div>
    );
}