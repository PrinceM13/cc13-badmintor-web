import Button from './Button';

export default function ButtonGroup() {
    return (
        <div className='flex'>
            <div className='basis-full'>
                <Button width='w-full' theme="my-gray-1" rounded='rounded-l-full' needSolid={true}>PICK-UP</Button>
            </div>
            <div className='basis-full'>
                <Button width='w-full' theme="my-gray-1" rounded='rounded-r-full' opacity={true}>SHIP</Button>
            </div>
        </div>
    );
};