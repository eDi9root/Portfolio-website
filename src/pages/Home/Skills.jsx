import React, { useState } from 'react'
import { SKILLS } from '../../utils/data'
import SkillCard from './SkillCard'
import Info from './Info'

const Skills = () => {
    
    const [skill, setSkill] = useState(SKILLS[0]);

    const handleSkill = (data) => {
        setSkill(data)
    }

    return (
        <div className='w-full py-16 text-white relative mx-0 my-16'>
            <div className='flex justify-center items-center md:text-4xl text-3xl font-extrabold mb-14'>
                Technical Skills
            </div>

            <div className='w-full lg:flex items-start lg:gap-12 pl-12 pr-12'>
                <div className='flex-1 grid gap-12 grid-cols-2 pb-10'>
                    {SKILLS.map((item) => (
                        <SkillCard
                            key={ item.title }
                            iconUrl={ item.icon }
                            title={ item.title }
                            isActive={ skill.title === item.title }
                            onClick={() => {
                                handleSkill(item);
                            }}
                        />
                    ))}
                </div>

                <div className='flex-1'>
                    <Info 
                    heading={skill.title} 
                    skills={skill.skills} 
                    />
                </div>   
            </div> 
        
        </div>
    )
}

export default Skills
