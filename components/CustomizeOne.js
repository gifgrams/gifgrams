import MediaSelector from '@/components/MediaSelector'
import ColorPicker from '@/ui/ColorPicker'

export default function CustomizeOne({ setFormData }) {
  return (
    <>
      <MediaSelector setFormData={setFormData} />
      <ColorPicker label="Accent Color" containerStyle={{ marginTop: 24 }} />
    </>
  )
}
