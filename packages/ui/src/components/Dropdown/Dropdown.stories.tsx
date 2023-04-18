import React, { useState } from 'react'
import { Dropdown } from './'
import { Button } from '../Button'
import { Input } from '../Input'

import { IconSettings } from './../Icon/icons/IconSettings'
import { IconLogOut } from './../Icon/icons/IconLogOut'
import { IconChevronDown } from './../Icon/icons/IconChevronDown'
import { IconChevronRight } from './../Icon/icons/IconChevronRight'
import { IconHardDrive } from './../Icon/icons/IconHardDrive'
import { IconLogIn } from './../Icon/icons/IconLogIn'
import { IconSearch } from './../Icon/icons/IconSearch'

export default {
  title: 'Navigation/Dropdown',
  component: Dropdown,
}

const DemoContainer = ({ children }: { children: React.ReactNode }) => (
  <div
    className="
      flex justify-center items-center
      w-screen h-screen
    "
  >
    <div
      className="
      p-3 px-5 
      bg-scale-300 border border-scale-600 rounded flex gap-4 
      justify-between
      items-center
      w-3/4
      "
    >
      <div>
        <h4 className="text-scale-1200 text-base">Shall we nest some components?</h4>
        <p className="text-scale-1100 text-sm">yea sure, go on then.</p>
      </div>
      <div className="relative">{children}</div>
    </div>
  </div>
)

export const DefaultFull = (args: any) => {
  const [checked, setChecked] = useState(false)
  const [value, setValue] = useState('red')

  return (
    <DemoContainer>
      <Dropdown
        side="bottom"
        align="end"
        overlay={[
          <Dropdown.Misc>
            <div>
              <span className="block">Signed in as </span>

              <span>tom@example.com </span>
            </div>
          </Dropdown.Misc>,
          <Dropdown.Separator />,
          <Dropdown.Label>Group label</Dropdown.Label>,
          <Dropdown.Item onClick={() => console.log('clicked')}>Account</Dropdown.Item>,
          <Dropdown.Item>
            Settings <Dropdown.RightSlot>⌘+T</Dropdown.RightSlot>
          </Dropdown.Item>,
          <Dropdown.Separator />,
          <Dropdown.Checkbox checked={checked} onChange={setChecked}>
            Show subtitles
          </Dropdown.Checkbox>,
          <Dropdown.Separator />,
          <Dropdown.RadioGroup value={value} onChange={setValue}>
            <Dropdown.Radio value={'red'}>Red</Dropdown.Radio>
            <Dropdown.Radio value={'blue'}>Blue</Dropdown.Radio>
            <Dropdown.Radio value={'green'}>Green</Dropdown.Radio>
          </Dropdown.RadioGroup>,
          <Dropdown.Separator />,
          <Dropdown
            isNested
            overlay={[
              <Dropdown.RadioGroup value={value} onChange={setValue}>
                <Dropdown.Radio value={'red'}>Red</Dropdown.Radio>
                <Dropdown.Radio value={'blue'}>Blue</Dropdown.Radio>
                <Dropdown.Radio value={'green'}>Green</Dropdown.Radio>
              </Dropdown.RadioGroup>,
              <Dropdown.Separator />,
              <Dropdown.Label>Group label</Dropdown.Label>,
              <Dropdown.Item onClick={() => console.log('clicked')}>Account</Dropdown.Item>,
              <Dropdown.Item>
                Settings <Dropdown.RightSlot>⌘+T</Dropdown.RightSlot>
              </Dropdown.Item>,
            ]}
          >
            <Dropdown.TriggerItem icon={<IconHardDrive />}>
              Open sub menu{' '}
              <Dropdown.RightSlot>
                <IconChevronRight size={14} />
              </Dropdown.RightSlot>
            </Dropdown.TriggerItem>
          </Dropdown>,
          <Dropdown.Separator />,
          <Dropdown.Item icon={<IconLogIn size="tiny" />}>Log out</Dropdown.Item>,
        ]}
      >
        <Button as="span" type="default" iconRight={<IconChevronDown />}>
          Click for dropdown
        </Button>
      </Dropdown>
    </DemoContainer>
  )
}

export const Default = (args: any) => (
  <div style={{ margin: '0 auto', minHeight: '420px', marginTop: '220px' }}>
    <Dropdown
      {...args}
      overlay={[
        <Dropdown.Misc>
          <div>
            <span className="block">Signed in as </span>

            <span>tom@example.com </span>
          </div>
        </Dropdown.Misc>,
        <Dropdown.Separator />,
        <Dropdown.Label>Group label</Dropdown.Label>,
        <Dropdown.Item onClick={() => console.log('clicked')}>Account</Dropdown.Item>,
        <Dropdown.Item>
          Settings <Dropdown.RightSlot>⌘+T</Dropdown.RightSlot>
        </Dropdown.Item>,
        <Dropdown.Separator />,
        <Dropdown.Item icon={<IconLogIn size="tiny" />}>Log out</Dropdown.Item>,
      ]}
    >
      <Button as="span" type="secondary" iconRight={<IconChevronDown />}>
        Click for dropdown
      </Button>
    </Dropdown>
  </div>
)

Default.args = {}

export const doNotcloseOverlay = (args: any) => (
  <div style={{ margin: '0 auto', minHeight: '420px', marginTop: '220px' }}>
    <Dropdown
      {...args}
      overlay={[
        <Dropdown.Misc>
          <span>Signed in as </span>
          <span>tom@example.com </span>
        </Dropdown.Misc>,
        <Dropdown.Separator />,
        <Dropdown.Item>Account</Dropdown.Item>,
        <Dropdown.Item>Settings</Dropdown.Item>,
        <Dropdown.Item>
          <Button icon={<IconLogOut />}>Log out</Button>
        </Dropdown.Item>,
      ]}
    >
      <Button as="span" type="outline" iconRight={<IconChevronDown />}>
        Click for dropdown
      </Button>
    </Dropdown>
  </div>
)

doNotcloseOverlay.args = {}

export const withCustomStyles = (args: any) => (
  <div
    style={{
      margin: '0 auto',
      minHeight: '420px',
      marginTop: '220px',
      marginLeft: '400px',
    }}
  >
    <Dropdown
      overlayStyle={{ minWidth: '500px' }}
      placement="bottomRight"
      {...args}
      overlay={[
        <Dropdown.Item>
          <span>Signed in as </span>
          <span>tom@example.com </span>
        </Dropdown.Item>,
        <Dropdown.Separator />,
        <Dropdown.Item>Account</Dropdown.Item>,
        <Dropdown.Item>Settings</Dropdown.Item>,
        <Dropdown.Separator />,
        <Dropdown.Item>
          <Button type="default" icon={<IconLogOut />}>
            Log out
          </Button>
        </Dropdown.Item>,
      ]}
    >
      <Button as="span" type="outline" iconRight={<IconChevronDown />}>
        Click for dropdown
      </Button>
    </Dropdown>
  </div>
)

withCustomStyles.args = {}

export const SearchList = (args: any) => (
  <div style={{ margin: '0 auto', minHeight: '420px', marginTop: '220px' }}>
    <Dropdown
      {...args}
      overlay={[
        <Dropdown.Misc>
          <Input size="tiny" icon={<IconSearch size={14} />} autoFocus={false} />
        </Dropdown.Misc>,
        <Dropdown.Item>
          <span>Signed in as </span>
          <span>tom@example.com </span>
        </Dropdown.Item>,
        <Dropdown.Item>
          <span>Signed in as </span>
          <span>tom@example.com </span>
        </Dropdown.Item>,
        <Dropdown.Separator />,
        <Dropdown.Item icon={<IconLogIn />}>
          <span>Log out</span>
        </Dropdown.Item>,
      ]}
    >
      <Button as="span" type="outline" iconRight={<IconChevronDown />}>
        Click for dropdown
      </Button>
    </Dropdown>
  </div>
)

SearchList.args = {}

export const Checkbox = (args: any) => {
  const [checked, setChecked] = useState(false)

  return (
    <div style={{ margin: '0 auto', minHeight: '420px', marginTop: '220px' }}>
      <Dropdown
        {...args}
        overlay={[
          <Dropdown.Item icon={<IconSettings size="small" />}>Account</Dropdown.Item>,
          <Dropdown.Item>Settings</Dropdown.Item>,
          <Dropdown.Separator />,
          <Dropdown.Checkbox checked={checked} onChange={setChecked}>
            Show subtitles
          </Dropdown.Checkbox>,
        ]}
      >
        <Button as="span" type="outline" iconRight={<IconChevronDown />}>
          Click for dropdown
        </Button>
      </Dropdown>
    </div>
  )
}

export const Radio = (args: any) => {
  const [value, setValue] = useState('red')

  return (
    <div style={{ margin: '0 auto', minHeight: '420px', marginTop: '220px' }}>
      <Dropdown
        {...args}
        overlay={[
          <Dropdown.RadioGroup value={value} onChange={setValue}>
            <Dropdown.Radio value={'red'}>Red</Dropdown.Radio>
            <Dropdown.Radio value={'blue'}>Blue</Dropdown.Radio>
            <Dropdown.Radio value={'green'}>Green</Dropdown.Radio>
          </Dropdown.RadioGroup>,
        ]}
      >
        <Button as="span" type="outline" iconRight={<IconChevronDown />}>
          Click for dropdown
        </Button>
      </Dropdown>
    </div>
  )
}

export const Nested = (args: any) => {
  const [value, setValue] = useState('red')

  return (
    <div style={{ margin: '0 auto', minHeight: '420px', marginTop: '220px' }}>
      <Dropdown
        {...args}
        overlay={
          <>
            <Dropdown.RadioGroup value={value} onChange={setValue}>
              <Dropdown.Radio value={'red'}>Red</Dropdown.Radio>
              <Dropdown.Radio value={'blue'}>Blue</Dropdown.Radio>
              <Dropdown.Radio value={'green'}>Green</Dropdown.Radio>
            </Dropdown.RadioGroup>

            <Dropdown
              isNested
              overlay={[
                <Dropdown.RadioGroup value={value} onChange={setValue}>
                  <Dropdown.Radio value={'red'}>Red</Dropdown.Radio>
                  <Dropdown.Radio value={'blue'}>Blue</Dropdown.Radio>
                  <Dropdown.Radio value={'green'}>Green</Dropdown.Radio>
                </Dropdown.RadioGroup>,
              ]}
            >
              <Dropdown.TriggerItem>Open sub menu</Dropdown.TriggerItem>
            </Dropdown>
            <Dropdown.Item>hello</Dropdown.Item>
          </>
        }
      >
        <Button as="span" type="outline" iconRight={<IconChevronDown />}>
          Click for dropdown
        </Button>
      </Dropdown>
    </div>
  )
}
