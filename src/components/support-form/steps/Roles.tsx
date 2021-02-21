import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  Grid,
  TextField,
} from '@material-ui/core'
import { FormikProps } from 'formik'
import * as yup from 'yup'

import { SupportFormData } from '../helpers/support-form.models'

type RolesProps = { formik: FormikProps<SupportFormData> }
export default function Roles({ formik }: RolesProps) {
  const { t } = useTranslation()

  return (
    <Grid container spacing={3}>
      <Grid item xs={'auto'} md={'auto'} lg={'auto'}>
        <FormControl required error={!!formik.errors.roles} component="fieldset">
          <h2>{t('common:support-form.steps.role.subtitle')}</h2>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={formik.values.roles.benefactor}
                  onChange={formik.handleChange}
                  name="roles.benefactor"
                  color="primary"
                />
              }
              label={t('common:support-form.steps.role.fields.benefactor')}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={formik.values.roles.partner}
                  onChange={formik.handleChange}
                  name="roles.partner"
                  color="primary"
                />
              }
              label={t('common:support-form.steps.role.fields.partner')}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={formik.values.roles.volunteer}
                  onChange={formik.handleChange}
                  name="roles.volunteer"
                  color="primary"
                />
              }
              label={t('common:support-form.steps.role.fields.volunteer')}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={formik.values.roles.associationMember}
                  onChange={formik.handleChange}
                  name="roles.associationMember"
                  color="primary"
                />
              }
              label={t('common:support-form.steps.role.fields.associationMember')}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={formik.values.roles.promoter}
                  onChange={formik.handleChange}
                  name="roles.promoter"
                  color="primary"
                />
              }
              label={t('common:support-form.steps.role.fields.promoter')}
            />
          </FormGroup>
          {formik.errors.roles ? (
            <FormHelperText>{t('common:support-form.helperText')}</FormHelperText>
          ) : (
            ''
          )}
        </FormControl>
      </Grid>
    </Grid>
  )
}
