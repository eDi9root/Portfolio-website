import Typewriter from 'typewriter-effect';

function Type() {
    return (
        <Typewriter
        options={{
            strings: ['Software Development', 'Cybersecurity', 'Future Tech', 'Innovation'],
            autoStart: true,
            loop: true,
            delay: 150,
        }}
        />
    );
}

export default Type