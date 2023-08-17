import React from 'react'
import { SegmentedControl } from "@mantine/core"


const SegmentControlLibrary = () => {
    return (
        <SegmentedControl
            size="lg"
            radius="lg"
            w={410}
            data={[
                { label: 'My catalogs', value: 'react' },
                { label: 'Saved', value: 'ng' }
            ]}
        />
    )
}

export default SegmentControlLibrary