import { useEffect, useRef, useState } from "react";

const Otp = () => {
    const length = 4;
    const [otp, setOtp] = useState(Array(length).fill(''));
    const ref = useRef<any[]>([]);

    const handleChange = (e: any, index: number) => {
        const value = e.target.value;
        const data = [...otp];
        data[index] = value;
        if (value && index !== length - 1) {
            ref.current[index + 1]?.focus();
        }
        setOtp(data);
    };

    const handleKeyDown = (e: any, index: number) => {
        const data = e.target.value;
        if (e.key === 'Backspace' && !data && index > 0) {
            ref.current[index - 1]?.focus();
        }
    }

    useEffect(() => {
        ref.current[0]?.focus();
    }, []);

    const isOtpComplete = otp.every(digit => digit !== '');

    useEffect(() => {
        if (isOtpComplete) {
            console.log('OTP entered:', otp.join(''));
        }
    }, [otp]);

    return (
        <div>
            <h1>OTP</h1>
            <div style={{ display: 'flex', gap: '8px' }}>
                {otp.map((data, index) => (
                    <input
                        type="text"
                        key={index}
                        value={data}
                        maxLength={1}
                        ref={(el) => ref.current[index] = el}
                        onChange={(e) => handleChange(e, index)}
                        onKeyDown={(e) => handleKeyDown(e, index)}
                        style={{
                            width: '40px',
                            height: '40px',
                            textAlign: 'center',
                            fontSize: '18px',
                            borderRadius: '4px',
                            border: '1px solid #ccc',
                        }}
                    />
                ))}
            </div>
            {isOtpComplete && <p>OTP is complete!</p>}
        </div>
    );
};

export default Otp;
