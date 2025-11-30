import React, { useState } from 'react';
import { Search, ChevronDown, ChevronUp } from 'lucide-react';

const TailwindGuide = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedCategories, setExpandedCategories] = useState({});

  const categories = {
    'Layout': {
      'Container': [
        { class: 'container', desc: 'Sets max-width to match min-width of current breakpoint', example: <div className="container mx-auto bg-blue-100 p-4">Container content</div> },
      ],
      'Display': [
        { class: 'block', desc: 'Display as block element', example: <span className="block bg-blue-200 p-2">Block element</span> },
        { class: 'inline-block', desc: 'Display as inline-block', example: <span className="inline-block bg-green-200 p-2 mr-2">Inline</span> },
        { class: 'inline', desc: 'Display as inline element', example: <span className="inline bg-yellow-200 p-2">Inline text</span> },
        { class: 'flex', desc: 'Display as flex container', example: <div className="flex gap-2 bg-purple-100 p-2"><div className="bg-purple-300 p-2">1</div><div className="bg-purple-300 p-2">2</div></div> },
        { class: 'grid', desc: 'Display as grid container', example: <div className="grid grid-cols-3 gap-2 bg-pink-100 p-2"><div className="bg-pink-300 p-2">1</div><div className="bg-pink-300 p-2">2</div><div className="bg-pink-300 p-2">3</div></div> },
        { class: 'hidden', desc: 'Hide element', example: <div className="bg-red-100 p-2">Visible <span className="hidden">Hidden text</span></div> },
      ],
      'Position': [
        { class: 'static', desc: 'Position static (default)', example: <div className="relative h-20 bg-gray-100"><div className="static bg-blue-300 p-2">Static</div></div> },
        { class: 'relative', desc: 'Position relative', example: <div className="relative bg-green-100 p-8"><div className="absolute top-2 left-2 bg-green-400 p-2">Absolute child</div></div> },
        { class: 'absolute', desc: 'Position absolute', example: <div className="relative h-20 bg-yellow-100"><div className="absolute top-2 right-2 bg-yellow-400 p-2">Absolute</div></div> },
        { class: 'fixed', desc: 'Position fixed to viewport', example: <div className="bg-red-100 p-2">Fixed elements stay in viewport (not shown in example)</div> },
        { class: 'sticky', desc: 'Position sticky', example: <div className="bg-purple-100 p-2">Sticky on scroll (not shown in example)</div> },
      ],
    },
    'Flexbox': {
      'Flex Direction': [
        { class: 'flex-row', desc: 'Flex direction row', example: <div className="flex flex-row gap-2 bg-blue-100 p-2"><div className="bg-blue-300 p-2">1</div><div className="bg-blue-300 p-2">2</div><div className="bg-blue-300 p-2">3</div></div> },
        { class: 'flex-col', desc: 'Flex direction column', example: <div className="flex flex-col gap-2 bg-green-100 p-2"><div className="bg-green-300 p-2">1</div><div className="bg-green-300 p-2">2</div><div className="bg-green-300 p-2">3</div></div> },
      ],
      'Justify Content': [
        { class: 'justify-start', desc: 'Justify content to start', example: <div className="flex justify-start gap-2 bg-purple-100 p-2"><div className="bg-purple-300 p-2">1</div><div className="bg-purple-300 p-2">2</div></div> },
        { class: 'justify-center', desc: 'Justify content to center', example: <div className="flex justify-center gap-2 bg-pink-100 p-2"><div className="bg-pink-300 p-2">1</div><div className="bg-pink-300 p-2">2</div></div> },
        { class: 'justify-between', desc: 'Justify content space between', example: <div className="flex justify-between gap-2 bg-yellow-100 p-2"><div className="bg-yellow-300 p-2">1</div><div className="bg-yellow-300 p-2">2</div></div> },
        { class: 'justify-around', desc: 'Justify content space around', example: <div className="flex justify-around gap-2 bg-red-100 p-2"><div className="bg-red-300 p-2">1</div><div className="bg-red-300 p-2">2</div></div> },
      ],
      'Align Items': [
        { class: 'items-start', desc: 'Align items to start', example: <div className="flex items-start h-20 gap-2 bg-blue-100 p-2"><div className="bg-blue-300 p-2">1</div><div className="bg-blue-300 p-2 h-12">2</div></div> },
        { class: 'items-center', desc: 'Align items to center', example: <div className="flex items-center h-20 gap-2 bg-green-100 p-2"><div className="bg-green-300 p-2">1</div><div className="bg-green-300 p-2 h-12">2</div></div> },
        { class: 'items-end', desc: 'Align items to end', example: <div className="flex items-end h-20 gap-2 bg-purple-100 p-2"><div className="bg-purple-300 p-2">1</div><div className="bg-purple-300 p-2 h-12">2</div></div> },
      ],
    },
    'Spacing': {
      'Padding': [
        { class: 'p-4', desc: 'Padding all sides (1rem)', example: <div className="bg-blue-100"><div className="p-4 bg-blue-300">Padded content</div></div> },
        { class: 'px-4', desc: 'Padding horizontal', example: <div className="bg-green-100"><div className="px-4 bg-green-300">Horizontal padding</div></div> },
        { class: 'py-4', desc: 'Padding vertical', example: <div className="bg-yellow-100"><div className="py-4 bg-yellow-300">Vertical padding</div></div> },
        { class: 'pt-4', desc: 'Padding top', example: <div className="bg-red-100"><div className="pt-4 bg-red-300">Top padding</div></div> },
        { class: 'pr-4', desc: 'Padding right', example: <div className="bg-purple-100"><div className="pr-4 bg-purple-300">Right padding</div></div> },
        { class: 'pb-4', desc: 'Padding bottom', example: <div className="bg-pink-100"><div className="pb-4 bg-pink-300">Bottom padding</div></div> },
        { class: 'pl-4', desc: 'Padding left', example: <div className="bg-indigo-100"><div className="pl-4 bg-indigo-300">Left padding</div></div> },
      ],
      'Margin': [
        { class: 'm-4', desc: 'Margin all sides', example: <div className="bg-blue-100 p-2"><div className="m-4 bg-blue-300 p-2">Margin content</div></div> },
        { class: 'mx-auto', desc: 'Margin horizontal auto (center)', example: <div className="bg-green-100 p-2"><div className="mx-auto w-32 bg-green-300 p-2">Centered</div></div> },
        { class: 'my-4', desc: 'Margin vertical', example: <div className="bg-yellow-100 p-2"><div className="my-4 bg-yellow-300 p-2">Vertical margin</div></div> },
        { class: 'mt-4', desc: 'Margin top', example: <div className="bg-red-100 p-2"><div className="mt-4 bg-red-300 p-2">Top margin</div></div> },
      ],
      'Gap': [
        { class: 'gap-2', desc: 'Gap between flex/grid items', example: <div className="flex gap-2 bg-purple-100 p-2"><div className="bg-purple-300 p-2">1</div><div className="bg-purple-300 p-2">2</div><div className="bg-purple-300 p-2">3</div></div> },
        { class: 'gap-4', desc: 'Larger gap', example: <div className="flex gap-4 bg-pink-100 p-2"><div className="bg-pink-300 p-2">1</div><div className="bg-pink-300 p-2">2</div></div> },
      ],
    },
    'Sizing': {
      'Width': [
        { class: 'w-full', desc: 'Width 100%', example: <div className="w-full bg-blue-300 p-2">Full width</div> },
        { class: 'w-1/2', desc: 'Width 50%', example: <div className="w-1/2 bg-green-300 p-2">Half width</div> },
        { class: 'w-64', desc: 'Width 16rem (256px)', example: <div className="w-64 bg-yellow-300 p-2">Fixed width</div> },
        { class: 'w-auto', desc: 'Width auto', example: <div className="w-auto bg-red-300 p-2 inline-block">Auto width</div> },
      ],
      'Height': [
        { class: 'h-full', desc: 'Height 100%', example: <div className="h-20 bg-blue-100"><div className="h-full bg-blue-300 p-2">Full height</div></div> },
        { class: 'h-screen', desc: 'Height 100vh', example: <div className="bg-green-300 p-2">Screen height (not fully shown)</div> },
        { class: 'h-64', desc: 'Height 16rem', example: <div className="h-64 bg-yellow-300 p-2">Fixed height</div> },
      ],
      'Min/Max': [
        { class: 'min-w-0', desc: 'Min width 0', example: <div className="min-w-0 bg-purple-300 p-2">Min width 0</div> },
        { class: 'max-w-md', desc: 'Max width 28rem', example: <div className="max-w-md bg-pink-300 p-2">Max width medium</div> },
        { class: 'min-h-screen', desc: 'Min height 100vh', example: <div className="bg-indigo-300 p-2">Min screen height (not fully shown)</div> },
      ],
    },
    'Typography': {
      'Font Size': [
        { class: 'text-xs', desc: 'Font size 0.75rem', example: <div className="text-xs">Extra small text</div> },
        { class: 'text-sm', desc: 'Font size 0.875rem', example: <div className="text-sm">Small text</div> },
        { class: 'text-base', desc: 'Font size 1rem', example: <div className="text-base">Base text</div> },
        { class: 'text-lg', desc: 'Font size 1.125rem', example: <div className="text-lg">Large text</div> },
        { class: 'text-xl', desc: 'Font size 1.25rem', example: <div className="text-xl">Extra large text</div> },
        { class: 'text-2xl', desc: 'Font size 1.5rem', example: <div className="text-2xl">2XL text</div> },
        { class: 'text-3xl', desc: 'Font size 1.875rem', example: <div className="text-3xl">3XL text</div> },
      ],
      'Font Weight': [
        { class: 'font-thin', desc: 'Font weight 100', example: <div className="font-thin">Thin text</div> },
        { class: 'font-normal', desc: 'Font weight 400', example: <div className="font-normal">Normal text</div> },
        { class: 'font-medium', desc: 'Font weight 500', example: <div className="font-medium">Medium text</div> },
        { class: 'font-bold', desc: 'Font weight 700', example: <div className="font-bold">Bold text</div> },
      ],
      'Text Align': [
        { class: 'text-left', desc: 'Text align left', example: <div className="text-left bg-gray-100 p-2">Left aligned text</div> },
        { class: 'text-center', desc: 'Text align center', example: <div className="text-center bg-gray-100 p-2">Center aligned text</div> },
        { class: 'text-right', desc: 'Text align right', example: <div className="text-right bg-gray-100 p-2">Right aligned text</div> },
      ],
      'Text Transform': [
        { class: 'uppercase', desc: 'Transform to uppercase', example: <div className="uppercase">uppercase text</div> },
        { class: 'lowercase', desc: 'Transform to lowercase', example: <div className="lowercase">LOWERCASE TEXT</div> },
        { class: 'capitalize', desc: 'Capitalize first letter', example: <div className="capitalize">capitalize text</div> },
      ],
      'Text Decoration': [
        { class: 'underline', desc: 'Text underline', example: <div className="underline">Underlined text</div> },
        { class: 'line-through', desc: 'Text line-through', example: <div className="line-through">Strikethrough text</div> },
        { class: 'no-underline', desc: 'No underline', example: <a href="#" className="no-underline text-blue-600">Link without underline</a> },
      ],
    },
    'Colors': {
      'Text Color': [
        { class: 'text-black', desc: 'Black text', example: <div className="text-black">Black text</div> },
        { class: 'text-white', desc: 'White text', example: <div className="text-white bg-gray-800 p-2">White text</div> },
        { class: 'text-red-500', desc: 'Red text (500)', example: <div className="text-red-500">Red text</div> },
        { class: 'text-blue-500', desc: 'Blue text (500)', example: <div className="text-blue-500">Blue text</div> },
        { class: 'text-green-500', desc: 'Green text (500)', example: <div className="text-green-500">Green text</div> },
        { class: 'text-yellow-500', desc: 'Yellow text (500)', example: <div className="text-yellow-500">Yellow text</div> },
        { class: 'text-purple-500', desc: 'Purple text (500)', example: <div className="text-purple-500">Purple text</div> },
      ],
      'Background Color': [
        { class: 'bg-white', desc: 'White background', example: <div className="bg-white border p-2">White background</div> },
        { class: 'bg-gray-100', desc: 'Gray background (100)', example: <div className="bg-gray-100 p-2">Gray 100 background</div> },
        { class: 'bg-red-500', desc: 'Red background (500)', example: <div className="bg-red-500 text-white p-2">Red background</div> },
        { class: 'bg-blue-500', desc: 'Blue background (500)', example: <div className="bg-blue-500 text-white p-2">Blue background</div> },
        { class: 'bg-green-500', desc: 'Green background (500)', example: <div className="bg-green-500 text-white p-2">Green background</div> },
      ],
    },
    'Borders': {
      'Border Width': [
        { class: 'border', desc: 'Border 1px', example: <div className="border p-2">Border 1px</div> },
        { class: 'border-2', desc: 'Border 2px', example: <div className="border-2 p-2">Border 2px</div> },
        { class: 'border-4', desc: 'Border 4px', example: <div className="border-4 p-2">Border 4px</div> },
        { class: 'border-t', desc: 'Border top', example: <div className="border-t-4 p-2">Border top</div> },
        { class: 'border-r', desc: 'Border right', example: <div className="border-r-4 p-2">Border right</div> },
        { class: 'border-b', desc: 'Border bottom', example: <div className="border-b-4 p-2">Border bottom</div> },
        { class: 'border-l', desc: 'Border left', example: <div className="border-l-4 p-2">Border left</div> },
      ],
      'Border Color': [
        { class: 'border-black', desc: 'Black border', example: <div className="border-4 border-black p-2">Black border</div> },
        { class: 'border-red-500', desc: 'Red border', example: <div className="border-4 border-red-500 p-2">Red border</div> },
        { class: 'border-blue-500', desc: 'Blue border', example: <div className="border-4 border-blue-500 p-2">Blue border</div> },
      ],
      'Border Radius': [
        { class: 'rounded', desc: 'Border radius 0.25rem', example: <div className="rounded bg-blue-300 p-2">Rounded corners</div> },
        { class: 'rounded-lg', desc: 'Border radius 0.5rem', example: <div className="rounded-lg bg-green-300 p-2">Large rounded</div> },
        { class: 'rounded-full', desc: 'Border radius 9999px', example: <div className="rounded-full bg-red-300 p-2 w-24 text-center">Full round</div> },
        { class: 'rounded-t', desc: 'Rounded top', example: <div className="rounded-t-lg bg-yellow-300 p-2">Rounded top</div> },
      ],
    },
    'Effects': {
      'Shadow': [
        { class: 'shadow-sm', desc: 'Small shadow', example: <div className="shadow-sm bg-white p-4">Small shadow</div> },
        { class: 'shadow', desc: 'Default shadow', example: <div className="shadow bg-white p-4">Default shadow</div> },
        { class: 'shadow-lg', desc: 'Large shadow', example: <div className="shadow-lg bg-white p-4">Large shadow</div> },
        { class: 'shadow-xl', desc: 'Extra large shadow', example: <div className="shadow-xl bg-white p-4">XL shadow</div> },
      ],
      'Opacity': [
        { class: 'opacity-0', desc: 'Opacity 0', example: <div className="bg-blue-500 p-2"><span className="opacity-0">Hidden</span></div> },
        { class: 'opacity-50', desc: 'Opacity 50%', example: <div className="opacity-50 bg-blue-500 text-white p-2">50% opacity</div> },
        { class: 'opacity-100', desc: 'Opacity 100%', example: <div className="opacity-100 bg-blue-500 text-white p-2">100% opacity</div> },
      ],
    },
    'Interactivity': {
      'Cursor': [
        { class: 'cursor-pointer', desc: 'Pointer cursor', example: <div className="cursor-pointer bg-blue-300 p-2">Hover me (pointer)</div> },
        { class: 'cursor-not-allowed', desc: 'Not allowed cursor', example: <div className="cursor-not-allowed bg-red-300 p-2">Hover me (not allowed)</div> },
        { class: 'cursor-wait', desc: 'Wait cursor', example: <div className="cursor-wait bg-yellow-300 p-2">Hover me (wait)</div> },
      ],
      'Hover': [
        { class: 'hover:bg-blue-500', desc: 'Change bg on hover', example: <div className="hover:bg-blue-500 hover:text-white bg-blue-100 p-2 transition">Hover me</div> },
        { class: 'hover:scale-105', desc: 'Scale on hover', example: <div className="hover:scale-105 bg-green-300 p-2 transition transform">Hover to scale</div> },
      ],
    },
    'Transforms': {
      'Scale': [
        { class: 'scale-50', desc: 'Scale 50%', example: <div className="bg-blue-100 p-4"><div className="scale-50 bg-blue-500 p-2">Scaled 50%</div></div> },
        { class: 'scale-100', desc: 'Scale 100%', example: <div className="scale-100 bg-green-500 text-white p-2">Normal scale</div> },
        { class: 'scale-150', desc: 'Scale 150%', example: <div className="bg-yellow-100 p-8"><div className="scale-150 bg-yellow-500 p-2">Scaled 150%</div></div> },
      ],
      'Rotate': [
        { class: 'rotate-45', desc: 'Rotate 45deg', example: <div className="bg-red-100 p-8"><div className="rotate-45 bg-red-500 text-white p-2 w-24">Rotated</div></div> },
        { class: 'rotate-90', desc: 'Rotate 90deg', example: <div className="bg-purple-100 p-8"><div className="rotate-90 bg-purple-500 text-white p-2 w-24">Rotated</div></div> },
      ],
    },
    'Overflow': {
      'Overflow': [
        { class: 'overflow-hidden', desc: 'Hide overflow', example: <div className="overflow-hidden h-16 bg-blue-100 p-2">This is a long text that will be hidden when it overflows the container boundaries</div> },
        { class: 'overflow-scroll', desc: 'Scroll overflow', example: <div className="overflow-scroll h-16 bg-green-100 p-2">This is a long text that will be scrollable when it overflows the container boundaries and you can scroll to see more</div> },
        { class: 'overflow-auto', desc: 'Auto overflow', example: <div className="overflow-auto h-16 bg-yellow-100 p-2">This is a long text that will show scrollbar only when needed</div> },
      ],
    },
  };

  const toggleCategory = (category) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const filteredCategories = Object.entries(categories).reduce((acc, [category, subcategories]) => {
    const filteredSubcategories = Object.entries(subcategories).reduce((subAcc, [subcat, classes]) => {
      const filteredClasses = classes.filter(item => 
        item.class.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.desc.toLowerCase().includes(searchTerm.toLowerCase())
      );
      if (filteredClasses.length > 0) {
        subAcc[subcat] = filteredClasses;
      }
      return subAcc;
    }, {});
    
    if (Object.keys(filteredSubcategories).length > 0) {
      acc[category] = filteredSubcategories;
    }
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Tailwind CSS Classes Visual Guide</h1>
          <p className="text-gray-600">Interactive examples of commonly used Tailwind utility classes</p>
        </div>

        <div className="mb-6 relative">
          <Search className="absolute left-3 top-3 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search classes (e.g., flex, bg-blue, rounded)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="space-y-4">
          {Object.entries(filteredCategories).map(([category, subcategories]) => (
            <div key={category} className="bg-white rounded-lg shadow">
              <button
                onClick={() => toggleCategory(category)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50"
              >
                <h2 className="text-xl font-semibold text-gray-800">{category}</h2>
                {expandedCategories[category] ? <ChevronUp /> : <ChevronDown />}
              </button>
              
              {expandedCategories[category] && (
                <div className="px-6 pb-6">
                  {Object.entries(subcategories).map(([subcat, classes]) => (
                    <div key={subcat} className="mb-6">
                      <h3 className="text-lg font-medium text-gray-700 mb-3">{subcat}</h3>
                      <div className="space-y-4">
                        {classes.map((item, idx) => (
                          <div key={idx} className="border border-gray-200 rounded p-4">
                            <div className="flex items-start justify-between mb-2">
                              <code className="text-sm bg-gray-100 px-2 py-1 rounded text-blue-600">{item.class}</code>
                              <span className="text-sm text-gray-500">{item.desc}</span>
                            </div>
                            <div className="mt-3 bg-gray-50 p-3 rounded">
                              {item.example}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {Object.keys(filteredCategories).length === 0 && (
          <div className="text-center py-12 text-gray-500">
            No classes found matching "{searchTerm}"
          </div>
        )}
      </div>
    </div>
  );
};

export default TailwindGuide;
