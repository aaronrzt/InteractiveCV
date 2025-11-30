import "./cvInterfaces"
import type { ExperienceEntry, ProjectEntry, EducationEntry, SkillCategory, LeadershipEntry, ContactInfo } from "./cvInterfaces"

export const contactInfo : ContactInfo =
{
    phoneNo: "+52 462 146 08 59",
    email: "aaronrzt@outlook.com",
    websites: 
    [
        "https://www.linkedin.com/in/aaronrzt",
        "https://github.com/aaronrzt"
    ]
}

export const experience : ExperienceEntry[] =
[
    {
        company:"Vista Solutions Inc.",
        role:"Machine Vision Developer",
        period:"February 2025 - Present",
        header:"Software development for industrial automatic inspection applications.",
        details:
        [
            "Worked with on-site engineers to identify potential approaches for finding defects on a manufactured part.",
            "Leveraged traditional image-processing algorithms with deep learning to enhance defect detection using MVTec's HALCON.",
            "Built modern graphic user interfaces able to interact with a wide range of devices to control the inspection process.",
            "Provided support to clients and coworkers alike, solving complex issues with a demanding timeline."
        ],
    },
    {
        company:"B&R (ABB Group)",
        role:"Application Engineer",
        period:"July 2023 - January 2024",
        header:"Software development for industrial manufacturing applications (contract work)",
        details:
        [
            "Developed the logic behind processes destined for manufacture processes using structured text and ladder logic.",
            "Planned and taught courses on proprietary technologies.",
            "Communicated directly with clients to work out project requirements and provided software and hardware support.",
        ],
    },
    {
        company:"General Electric Aerospace",
        role:"Software Verification Intern",
        period:"August 2022 - January 2023",
        header:"Unit testing for software modules destined for aerospace engines.",
        details:
        [
            "Designed and implemented unit test scripts in VBA and Python to automate verification tasks."
        ],
    }
]

export const education : EducationEntry[] =
[
    {
        institution:"ITESM, Campus Querétaro, México.",
        degree:"B.S. in Robotics and Digital Systems Engineering | Minor in 4.0 Systems and Technologies.",
        period:"August 2019 - June 2023",
        details:
        [
            "Grade: 92/100, GPA: 3.7",
            "Certificate: https://certificados.tec.mx/certificate/828e105a490957388d37b5d6009525f6"
        ]
    }
]

export const projects : ProjectEntry[] = 
[
    {
        company: "Vista Solutions Inc.",
        project:"Optical Robotic Allignment",
        period: "Octuber - December 2025",
        header:"Developed an application that communicates with a robot to scan a part and align its end-tool with respect to a detected feature.",
        details:
        [
            "Partnered with multiple teams to set up EthernetIP signals to control the flow of several tasks.",
            "Developed a graphic user interface that allows interaction with each of the application components.",
            "Implenented inspections for robust feature detection based on user-defined parameters."
        ]
    },
    {
        company: "Manchester Robotics",
        project:"Navigation with Obstacle Avoidance",
        period: "February - June 2023",
        header:"Developed intelligent robotics for navigation with obstacle avoidance using Python + ROS.",
        details:
        [
            "Implemented a Kalman Filter to provide accurate and reliable state estimares, despite noise and uncertainties.",
            "Developed a Bug algorithm for obstacle avoidance navigation.",
            "Successfully deployed on the Jetson Nano platform, demonstrating proficiency in edge computing.",
            "Conducted thorough simulation in Gazebo to validate system robustness."
        ]
    },
    {
        company: "Laser & Manufacturing",
        project:"Industrial Internet of Things (IIoT) Project",
        period: "March - June 2022",
        header: "Developed a Python-based platform for monitoring an industrial manufacturing process.",
        details:
        [
            "Implemented a Kalman Filter to provide accurate and reliable state estimares, despite noise and uncertainties.",
            "Developed a Bug algorithm for obstacle avoidance navigation.",
            "Successfully deployed on the Jetson Nano platform, demonstrating proficiency in edge computing.",
            "Conducted thorough simulation in Gazebo to validate system robustness."
        ]
    },
    {
        company: "",
        project:"This interactive CV!",
        period: "November 2025",
        header:"Designed, developed and tested an application that can interactively display my professional information in a terminal-like environment.",
        details:
        [
            
            "Implemented a Kalman Filter to provide accurate and reliable state estimares, despite noise and uncertainties.",
            "Developed a Bug algorithm for obstacle avoidance navigation.",
            "Successfully deployed on the Jetson Nano platform, demonstrating proficiency in edge computing.",
            "Conducted thorough simulation in Gazebo to validate system robustness."
        ]
    },
]

export const leadershipActivities : LeadershipEntry [] =
[
    {
        company:"2023 VEX Robotics World Championship",
        activity:"Vortex",
        period:"August 2022 - April 2023",
        details:
        [
            "Development of two robots to compete in the Spin Up VEX Challenge.",
            "Designed and engineered high-speed functional robots for competitive robotics.",
            "Implemented algorithms for autonomous and RC programs, using control systems and sensed data.",
            "Judges Champions @ 2022 Nationals."
        ]
    }
]

export const skills : SkillCategory[] =
[
    {
        category: "Programming & Scripting",
        skills: 
        [
            "C#", "Python", "C++", "TypeScript", "React", "C", "VHDL", "SQL", "Structured Text", "Ladder Logic"
        ]
    },
    {
        category: "Machine Vision & Robotics",
        skills: 
        [
            "HDevelop", "Halcon", "ROS", "Gazebo", "OpenCV", "CUDA"
        ]
    },
    {
        category: "AI & Machine Learning",
        skills: 
        [
            "TensorFlow", "PyTorch", "Keras", "Pandas"
        ]
    },
    {
        category: "Software Development & Tools",
        skills: 
        [
            "Git", "Linux", "AWS", "MATLAB", "Node-RED"
        ]
    },
    {
        category: "Engineering & Design",
        skills: 
        [
            "Autodesk Suite", "WPF", "MVVM Architecture"
        ]
    }
]