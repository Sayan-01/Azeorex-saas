'use client'
import { Badge } from '@/components/ui/badge'
import { EditorElement, useEditor } from "../../../../../../../../../../../../providers/editor/editor-provider";
import clsx from 'clsx'
import React from 'react'
import { v4 } from 'uuid'
import Recursive from './recursive'
import { Trash } from 'lucide-react'
import { defaultStyles, EditorBtns } from '@/types/types';

type Props = { element: EditorElement }

const Container = ({ element }: Props) => {
  const { id, content, name, styles, type } = element
  const { dispatch, state } = useEditor()

  const handleOnDrop = (e: React.DragEvent, type: string) => {
    e.stopPropagation()
    const componentType = e.dataTransfer.getData('componentType') as EditorBtns

    switch (componentType) {
      case 'text':
        dispatch({
          type: 'ADD_ELEMENT',
          payload: {
            containerId: id,
            elementDetails: {
              content: { innerText: 'Element' },
              id: v4(),
              name: 'Text',
              styles: {
                color: 'black',
                ...defaultStyles,
              },
              type: 'text',
            },
          },
        })
        break
      case 'link':
        dispatch({
          type: 'ADD_ELEMENT',
          payload: {
            containerId: id,
            elementDetails: {
              content: {
                innerText: 'Link Element',
                href: '#',
              },
              id: v4(),
              name: 'Link',
              styles: {
                color: 'black',
                ...defaultStyles,
              },
              type: 'link',
            },
          },
        })
        break
      case 'video':
        dispatch({
          type: 'ADD_ELEMENT',
          payload: {
            containerId: id,
            elementDetails: {
              content: {
                src: 'https://www.youtube.com/embed/A3l6YYkXzzg?si=zbcCeWcpq7Cwf8W1',
              },
              id: v4(),
              name: 'Video',
              styles: {},
              type: 'video',
            },
          },
        })
        break
      case 'container':
        dispatch({
          type: 'ADD_ELEMENT',
          payload: {
            containerId: id,
            elementDetails: {
              content: [],
              id: v4(),
              name: 'Container',
              styles: { ...defaultStyles },
              type: 'container',
            },
          },
        })
        break
      case 'contactForm':
        dispatch({
          type: 'ADD_ELEMENT',
          payload: {
            containerId: id,
            elementDetails: {
              content: [],
              id: v4(),
              name: 'Contact Form',
              styles: {},
              type: 'contactForm',
            },
          },
        })
        break
      case 'paymentForm':
        dispatch({
          type: 'ADD_ELEMENT',
          payload: {
            containerId: id,
            elementDetails: {
              content: [],
              id: v4(),
              name: 'Contact Form',
              styles: {},
              type: 'paymentForm',
            },
          },
        })
        break
      case '2Col':
        dispatch({
          type: 'ADD_ELEMENT',
          payload: {
            containerId: id,
            elementDetails: {
              content: [
                {
                  content: [],
                  id: v4(),
                  name: 'Container',
                  styles: { ...defaultStyles, width: '100%' },
                  type: 'container',
                },
                {
                  content: [],
                  id: v4(),
                  name: 'Container',
                  styles: { ...defaultStyles, width: '100%' },
                  type: 'container',
                },
              ],
              id: v4(),
              name: 'Two Columns',
              styles: { ...defaultStyles, display: 'flex' },
              type: '2Col',
            },
          },
        })
        break
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  const handleDragStart = (e: React.DragEvent, type: string) => {
    if (type === '__body') return
    e.dataTransfer.setData('componentType', type)
  }

  const handleOnClickBody = (e: React.MouseEvent) => {
    e.stopPropagation()
    dispatch({
      type: 'CHANGE_CLICKED_ELEMENT',
      payload: {
        elementDetails: element,
      },
    })
  }

  const handleDeleteElement = () => {
    dispatch({
      type: 'DELETE_ELEMENT',
      payload: {
        elementDetails: element,
      },
    })
  }

  return (
    <div
      style={{
        ...styles,
      }}
      // className={clsx("relative p-4 transition-all box group", {
      //   "max-w-[80rem] w-full": type === "container" || type === "2Col",
      //   "h-fit max-w-[80rem] mx-auto": type === "container",
      //   "h-full": type === "__body",
      //   "overflow-scroll": type === "__body",
      //   "flex flex-col md:!flex-row": type === "2Col",
      //   "shadow-inner-gray": !state.editor.liveMode && state.editor.selectedElement.id !== id, // Default gray inner shadow for unselected elements
      //   "shadow-inner-blue": state.editor.selectedElement.id === id && !state.editor.liveMode, // Blue inner shadow for selected elements
      //   "group-hover:shadow-inner-blue": !state.editor.liveMode && state.editor.selectedElement.id !== id, // Blue inner shadow on hover for non-selected elements
      // })}

      // className={clsx("relative p-4 transition-all box group", {
      //   "max-w-[80rem] w-full": type === "container" || type === "2Col",
      //   "h-fit max-w-[80rem] mx-auto": type === "container",
      //   "h-full": type === "__body",
      //   "overflow-scroll ": type === "__body",
      //   "flex flex-col md:!flex-row": type === "2Col",
      //   "!outline-blue-500": state.editor.selectedElement.id === id && !state.editor.liveMode && state.editor.selectedElement.type !== "__body",
      //   "!outline-main !outline": state.editor.selectedElement.id === id && !state.editor.liveMode && state.editor.selectedElement.type === "__body",
      //   "!outline-solid": state.editor.selectedElement.id === id && !state.editor.liveMode,
      //   "outline-dashed outline-[1px] outline-slate-300 hover:outline-blue-500": !state.editor.liveMode,
      // })}

      // className={clsx("relative p-4 transition-all box group", {
      //   "max-w-[80rem] w-full": type === "container" || type === "2Col",
      //   "h-fit max-w-[80rem] mx-auto": type === "container",
      //   "h-full": type === "__body",
      //   "overflow-scroll bg-[#161616] rounded-xl": type === "__body",
      //   "flex flex-col md:!flex-row": type === "2Col",
      //   "!outline-blue-500": state.editor.selectedElement.id === id && !state.editor.liveMode && state.editor.selectedElement.type !== "__body",
      //   "shadow-inner-border-main": state.editor.selectedElement.id === id && !state.editor.liveMode && state.editor.selectedElement.type === "__body",
      //   "!outline-solid": state.editor.selectedElement.id === id && !state.editor.liveMode,
      //   "outline-dashed outline-[1px] outline-slate-500 hover:outline-blue-500": !state.editor.liveMode && type !== "__body",
      // })}

      className={clsx("relative p-4 transition-all box group", {
        "max-w-[80rem] w-full": type === "container" || type === "2Col",
        "h-fit max-w-[80rem] mx-auto": type === "container",
        "h-full": type === "__body",
        "overflow-scroll bg-[#161616] rounded-r-xl": type === "__body",
        "flex flex-col md:!flex-row": type === "2Col",
        "shadow-inner-border-blue-500": state.editor.selectedElement.id === id && !state.editor.liveMode && state.editor.selectedElement.type !== "__body",
        "shadow-inner-border-500": state.editor.selectedElement.id === id && !state.editor.liveMode && state.editor.selectedElement.type === "__body",
        "!shadow-inner-border-blue-500-500": state.editor.selectedElement.id === id && !state.editor.liveMode,
        "shadow-inner-border-slate-500 hover:shadow-inner-border-blue-500": !state.editor.liveMode && type !== "__body",
      })}
      onDrop={(e) => handleOnDrop(e, id)}
      onDragOver={handleDragOver}
      draggable={type !== "__body"}
      onClick={handleOnClickBody}
      onDragStart={(e) => handleDragStart(e, "container")}
    >
      <Badge
        className={clsx("absolute -top-[19px] h-5 left-0 rounded-none rounded-t-lg hidden", {
          block: state.editor.selectedElement.id === element.id && !state.editor.liveMode,
        })}
      >
        {element.name}
      </Badge>

      {Array.isArray(content) &&
        content.map((childElement) => (
          <Recursive
            key={childElement.id}
            element={childElement}
          />
        ))}

      {state.editor.selectedElement.id === element.id && !state.editor.liveMode && state.editor.selectedElement.type !== "__body" && (
        <div className="absolute bg-blue-500 px-2.5 py-1 text-xs font-bold  -top-[19px] right-0 rounded-none rounded-t-lg !text-white">
          <Trash
            size={12}
            onClick={handleDeleteElement}
          />
        </div>
      )}
    </div>
  );
}

export default Container
