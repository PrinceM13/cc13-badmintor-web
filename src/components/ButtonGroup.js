import Button from './Button';

export default function ButtonGroup() {
    return (
        <div className='flex'>
            <div className='basis-full'>
                <Button width='w-full' theme="my-gray-1">PICK-UP</Button>
            </div>
            <div className='basis-full'>
                <Button width='w-full' theme="my-gray-1">SHIP</Button>
            </div>
        </div>
    );
};