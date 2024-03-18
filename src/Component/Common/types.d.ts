export interface ModalProps {
    open: boolean;
    className?: string;
    onClose: () => void;
    customPosition?: string;
    centerContent?: boolean;
    isFullScreen?: boolean;
    children: React.ReactNode;

}

export interface DropdownProps {
    value?: string;
    options?: { 
        label: string;
        value: string;
    }[];
    onChange?: (value: any) => void;
}