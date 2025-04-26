"use client";

import { Button, Input, Modal, Card } from "antd";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid'
import Section from "./section";

type Task = {
    id: string;
    title: string;
};

type Section = {
    id: string;
    title: string;
    tasks: Task[];
};

export default function Board() {

    const [sections, setSections] = useState<Section[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newSectionTitle, setNewSectionTitle] = useState('');

    const handleOk = () => {
        if (newSectionTitle.trim()) {
            console.log(newSectionTitle)
            setSections([...sections, { id: uuidv4(), title: newSectionTitle, tasks: [] }]);
            setNewSectionTitle('');
            setIsModalOpen(false);
        }
    }

    const addTask = (sectionId: string) => {
        const title = prompt("Task title????");
        if (title?.trim()) {
            setSections(prev =>
                prev.map(section =>
                    section.id === sectionId
                        ? { ...section, tasks: [...section.tasks, { id: uuidv4(), title }] }
                        : section
                )
            );
        }
    }

    return <div className="p-4">
        <Button type="primary" className="mb-4" onClick={() => setIsModalOpen(true)}>
            Add section
        </Button>
        <div className="flex gap-4 overflow-x auto">
            {
                sections.map(section => (
                    <Section key={section.id} section={section} addTask={addTask} />
                ))
            }

        </div>

        <Modal
            title="Add New Section"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={() => setIsModalOpen(false)}
        >

            <Input
                placeholder="Section title"
                value={newSectionTitle}
                onChange={e => setNewSectionTitle(e.target.value)}
            ></Input>

        </Modal>


    </div>
};