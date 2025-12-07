"use client";

import { useState } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import SortableItem from "./SortableItem";

export default function DragOrder({ items, correctOrder, title }: any) {
  const [order, setOrder] = useState(items);
  const [score, setScore] = useState<null | number>(null);

  function handleDragEnd(event: any) {
    const { active, over } = event;
    if (active.id !== over.id) {
      const oldIndex = order.findIndex((i: any) => i.id === active.id);
      const newIndex = order.findIndex((i: any) => i.id === over.id);
      setOrder((items: any) => arrayMove(items, oldIndex, newIndex));
    }
  }

  function check() {
    let correct = 0;
    order.forEach((item: any, i: number) => {
      if (item.id === correctOrder[i]) correct++;
    });
    setScore(correct);
  }

  return (
    <div className="bg-white border p-6 rounded-xl shadow-sm space-y-4">
      <h2 className="text-xl font-semibold">{title}</h2>

      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={order} strategy={verticalListSortingStrategy}>
          {order.map((item: any) => (
            <SortableItem key={item.id} id={item.id}>
              <div className="p-3 border rounded bg-blue-50 text-blue-900 font-medium shadow-sm">
                {item.label}
              </div>
            </SortableItem>
          ))}
        </SortableContext>
      </DndContext>

      <button
        onClick={check}
        className="px-4 py-2 bg-blue-800 text-white rounded hover:bg-blue-700"
      >
        Check Order
      </button>

      {score !== null && (
        <p className="text-lg font-semibold">
          You got {score} / {correctOrder.length} correct!
        </p>
      )}
    </div>
  );
}
